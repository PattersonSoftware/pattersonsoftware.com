import '@testing-library/jest-dom/vitest';
import { installMatchMedia, resetMatchMedia } from './matchMedia';

// Node.js ships an experimental built-in `localStorage` that doesn't implement the Web Storage
// API (getItem, setItem, clear, etc.) correctly in test environments. Replace it with a proper
// in-memory implementation.
const localStorageImpl = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string): string | null =>
      Object.prototype.hasOwnProperty.call(store, key) ? store[key] : null,
    setItem: (key: string, value: string): void => {
      store[key] = String(value);
    },
    removeItem: (key: string): void => {
      delete store[key];
    },
    clear: (): void => {
      store = {};
    },
    key: (index: number): string | null => Object.keys(store)[index] ?? null,
    get length(): number {
      return Object.keys(store).length;
    },
  };
})();

Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageImpl,
  writable: true,
  configurable: true,
});

installMatchMedia();

afterEach(() => {
  resetMatchMedia();
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});
