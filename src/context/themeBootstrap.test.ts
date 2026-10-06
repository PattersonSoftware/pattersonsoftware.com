import indexHtml from '../../index.html?raw';
import { setSystemPrefersDark } from '../test/matchMedia';
import { THEME_STORAGE_KEY, readStoredTheme } from './theme';

// index.html applies the theme before React loads. These tests run that inline script and check it
// agrees with the provider's rules (stored choice wins; otherwise follow the system preference).
const bootstrapScript = (() => {
  const match = indexHtml.match(/<script>([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Theme bootstrap <script> not found in index.html');
  return match[1];
})();

function runBootstrap(): boolean {
  new Function(bootstrapScript)();
  return document.documentElement.classList.contains('dark');
}

describe('index.html theme bootstrap', () => {
  it.each([
    { stored: null, systemDark: false, expectDark: false },
    { stored: null, systemDark: true, expectDark: true },
    { stored: 'light', systemDark: true, expectDark: false },
    { stored: 'dark', systemDark: false, expectDark: true },
    { stored: 'invalid', systemDark: true, expectDark: true },
    { stored: 'invalid', systemDark: false, expectDark: false },
  ])(
    'stored=$stored, system dark=$systemDark -> dark=$expectDark',
    ({ stored, systemDark, expectDark }) => {
      if (stored !== null) localStorage.setItem(THEME_STORAGE_KEY, stored);
      setSystemPrefersDark(systemDark);
      expect(runBootstrap()).toBe(expectDark);
      // Same decision as the provider's helpers.
      const providerTheme = readStoredTheme() ?? (systemDark ? 'dark' : 'light');
      expect(providerTheme === 'dark').toBe(expectDark);
    },
  );

  it('falls back to the system preference when storage throws', () => {
    const getItem = vi.spyOn(localStorage, 'getItem').mockImplementation(() => {
      throw new Error('SecurityError');
    });
    setSystemPrefersDark(true);
    expect(runBootstrap()).toBe(true);
    getItem.mockRestore();
  });
});
