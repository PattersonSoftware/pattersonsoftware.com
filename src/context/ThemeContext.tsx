import React, { useEffect, useState, useSyncExternalStore } from 'react';
import {
  DARK_MODE_QUERY,
  ThemeContext,
  readStoredTheme,
  writeStoredTheme,
  type Theme,
} from './theme';

function subscribeToSystemTheme(onChange: () => void): () => void {
  const query = window.matchMedia(DARK_MODE_QUERY);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function getSystemTheme(): Theme {
  return window.matchMedia(DARK_MODE_QUERY).matches ? 'dark' : 'light';
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

// The initial `dark` class is set by an inline script in index.html to avoid a flash of the wrong
// theme; this provider keeps it in sync afterwards. Keep the two in agreement.
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Only an explicit toggle is persisted, so visitors without a stored choice follow the OS setting.
  const [storedTheme, setStoredTheme] = useState<Theme | null>(readStoredTheme);
  const systemTheme = useSyncExternalStore(subscribeToSystemTheme, getSystemTheme);
  const theme = storedTheme ?? systemTheme;

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setStoredTheme(next);
    writeStoredTheme(next);
  };

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
