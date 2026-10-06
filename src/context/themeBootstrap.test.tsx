import { render } from '@testing-library/react';
import indexHtml from '../../index.html?raw';
import { setSystemPrefersDark } from '../test/matchMedia';
import { THEME_STORAGE_KEY, type Theme } from './theme';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './useTheme';

// index.html applies the theme before React loads. These tests run that inline script and check it
// picks the same theme ThemeProvider does, so the two can't drift apart.
const bootstrapScript = (() => {
  const match = indexHtml.match(/<script>([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Theme bootstrap <script> not found in index.html');
  return match[1];
})();

function bootstrapTheme(): Theme {
  document.documentElement.classList.remove('dark');
  new Function(bootstrapScript)();
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function providerTheme(): Theme {
  let theme: Theme | undefined;
  function Probe() {
    theme = useTheme().theme;
    return null;
  }
  render(
    <ThemeProvider>
      <Probe />
    </ThemeProvider>,
  );
  return theme!;
}

describe('index.html theme bootstrap', () => {
  it.each([
    { stored: null, systemDark: false, expected: 'light' },
    { stored: null, systemDark: true, expected: 'dark' },
    { stored: 'light', systemDark: true, expected: 'light' },
    { stored: 'dark', systemDark: false, expected: 'dark' },
    { stored: 'invalid', systemDark: true, expected: 'dark' },
    { stored: 'invalid', systemDark: false, expected: 'light' },
  ])(
    'stored=$stored, system dark=$systemDark -> $expected, matching ThemeProvider',
    ({ stored, systemDark, expected }) => {
      if (stored !== null) localStorage.setItem(THEME_STORAGE_KEY, stored);
      setSystemPrefersDark(systemDark);
      expect(bootstrapTheme()).toBe(expected);
      expect(providerTheme()).toBe(expected);
    },
  );

  it('falls back to the system preference when storage throws, matching ThemeProvider', () => {
    vi.spyOn(localStorage, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    setSystemPrefersDark(true);
    expect(bootstrapTheme()).toBe('dark');
    expect(providerTheme()).toBe('dark');
  });
});
