type ChangeListener = (event: MediaQueryListEvent) => void;

const listeners = new Set<ChangeListener>();
let prefersDark = false;

// Installs a controllable `window.matchMedia` stub. Only `(prefers-color-scheme: dark)` ever matches.
export function installMatchMedia(): void {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string): MediaQueryList => {
      const isDarkQuery = query === '(prefers-color-scheme: dark)';
      return {
        matches: isDarkQuery && prefersDark,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: (_type: string, listener: ChangeListener) => {
          if (isDarkQuery) listeners.add(listener);
        },
        removeEventListener: (_type: string, listener: ChangeListener) => {
          listeners.delete(listener);
        },
        dispatchEvent: () => false,
      } as unknown as MediaQueryList;
    },
  });
}

// Sets the system dark-mode preference and notifies any subscribed listeners.
export function setSystemPrefersDark(value: boolean): void {
  prefersDark = value;
  const event = { matches: value, media: '(prefers-color-scheme: dark)' } as MediaQueryListEvent;
  for (const listener of listeners) listener(event);
}

export function resetMatchMedia(): void {
  prefersDark = false;
  listeners.clear();
}
