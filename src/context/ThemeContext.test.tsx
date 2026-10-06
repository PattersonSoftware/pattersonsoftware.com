import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setSystemPrefersDark } from '../test/matchMedia';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './useTheme';

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
}

function renderWithProvider() {
  return render(
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>,
  );
}

const isDarkClassApplied = () => document.documentElement.classList.contains('dark');

describe('ThemeContext', () => {
  describe('initial state', () => {
    it('defaults to light when nothing is stored and the system does not prefer dark', () => {
      renderWithProvider();
      expect(screen.getByTestId('theme')).toHaveTextContent('light');
      expect(isDarkClassApplied()).toBe(false);
    });

    it('falls back to dark when the system prefers dark and nothing is stored', () => {
      setSystemPrefersDark(true);
      renderWithProvider();
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
      expect(isDarkClassApplied()).toBe(true);
    });

    it.each(['light', 'dark'] as const)('uses a stored "%s" preference', (stored) => {
      localStorage.setItem('theme', stored);
      setSystemPrefersDark(stored === 'light');
      renderWithProvider();
      expect(screen.getByTestId('theme')).toHaveTextContent(stored);
      expect(isDarkClassApplied()).toBe(stored === 'dark');
    });

    it('ignores an invalid stored value', () => {
      localStorage.setItem('theme', 'purple');
      renderWithProvider();
      expect(screen.getByTestId('theme')).toHaveTextContent('light');
    });

    it('does not persist the system preference on load', () => {
      setSystemPrefersDark(true);
      renderWithProvider();
      expect(localStorage.getItem('theme')).toBeNull();
    });

    it('still renders when storage is unavailable', () => {
      vi.spyOn(localStorage, 'getItem').mockImplementation(() => {
        throw new Error('SecurityError');
      });
      renderWithProvider();
      expect(screen.getByTestId('theme')).toHaveTextContent('light');
    });
  });

  describe('system preference changes', () => {
    it('follows the system when there is no stored preference', () => {
      renderWithProvider();
      act(() => setSystemPrefersDark(true));
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
      expect(isDarkClassApplied()).toBe(true);
    });

    it('keeps an explicit choice when the system changes', async () => {
      const user = userEvent.setup();
      renderWithProvider();
      await user.click(screen.getByRole('button', { name: /toggle/i }));
      act(() => setSystemPrefersDark(false));
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });
  });

  describe('toggleTheme', () => {
    it('switches from light to dark and adds the dark class', async () => {
      const user = userEvent.setup();
      renderWithProvider();
      await user.click(screen.getByRole('button', { name: /toggle/i }));
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
      expect(isDarkClassApplied()).toBe(true);
    });

    it('switches from dark to light and removes the dark class', async () => {
      localStorage.setItem('theme', 'dark');
      const user = userEvent.setup();
      renderWithProvider();
      await user.click(screen.getByRole('button', { name: /toggle/i }));
      expect(screen.getByTestId('theme')).toHaveTextContent('light');
      expect(isDarkClassApplied()).toBe(false);
    });

    it('persists the chosen theme', async () => {
      const user = userEvent.setup();
      renderWithProvider();
      await user.click(screen.getByRole('button', { name: /toggle/i }));
      expect(localStorage.getItem('theme')).toBe('dark');
      await user.click(screen.getByRole('button', { name: /toggle/i }));
      expect(localStorage.getItem('theme')).toBe('light');
    });

    it('still toggles when storage writes fail', async () => {
      vi.spyOn(localStorage, 'setItem').mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });
      const user = userEvent.setup();
      renderWithProvider();
      await user.click(screen.getByRole('button', { name: /toggle/i }));
      expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    });
  });

  describe('useTheme guard', () => {
    it('throws when used outside ThemeProvider', () => {
      vi.spyOn(console, 'error').mockImplementation(() => {});
      expect(() => render(<ThemeConsumer />)).toThrow(
        'useTheme must be used within a ThemeProvider',
      );
    });
  });
});
