import { use } from 'react';
import { ThemeContext, type ThemeContextValue } from './theme';

export function useTheme(): ThemeContextValue {
  const ctx = use(ThemeContext);
  if (ctx === null) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
