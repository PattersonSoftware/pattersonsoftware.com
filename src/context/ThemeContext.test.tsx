import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, useTheme } from './ThemeContext'

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  )
}

describe('ThemeContext', () => {
  afterEach(() => {
    document.documentElement.classList.remove('dark')
    localStorage.clear()
  })

  describe('initial state', () => {
    it('defaults to light when nothing is stored and matchMedia does not prefer dark', () => {
      render(<ThemeProvider><ThemeConsumer /></ThemeProvider>)
      expect(screen.getByTestId('theme')).toHaveTextContent('light')
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('reads "dark" from localStorage and adds dark class to html', () => {
      localStorage.setItem('theme', 'dark')
      render(<ThemeProvider><ThemeConsumer /></ThemeProvider>)
      expect(screen.getByTestId('theme')).toHaveTextContent('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('reads "light" from localStorage and does not add dark class', () => {
      localStorage.setItem('theme', 'light')
      render(<ThemeProvider><ThemeConsumer /></ThemeProvider>)
      expect(screen.getByTestId('theme')).toHaveTextContent('light')
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('falls back to dark when prefers-color-scheme is dark and nothing is stored', () => {
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
          matches: query === '(prefers-color-scheme: dark)',
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        }),
      })
      render(<ThemeProvider><ThemeConsumer /></ThemeProvider>)
      expect(screen.getByTestId('theme')).toHaveTextContent('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
      // Restore default stub
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: (query: string) => ({
          matches: false,
          media: query,
          onchange: null,
          addListener: () => {},
          removeListener: () => {},
          addEventListener: () => {},
          removeEventListener: () => {},
          dispatchEvent: () => false,
        }),
      })
    })
  })

  describe('toggleTheme', () => {
    it('switches from light to dark and adds dark class', async () => {
      const user = userEvent.setup()
      render(<ThemeProvider><ThemeConsumer /></ThemeProvider>)
      await user.click(screen.getByRole('button', { name: /toggle/i }))
      expect(screen.getByTestId('theme')).toHaveTextContent('dark')
      expect(document.documentElement.classList.contains('dark')).toBe(true)
    })

    it('switches from dark to light and removes dark class', async () => {
      localStorage.setItem('theme', 'dark')
      const user = userEvent.setup()
      render(<ThemeProvider><ThemeConsumer /></ThemeProvider>)
      await user.click(screen.getByRole('button', { name: /toggle/i }))
      expect(screen.getByTestId('theme')).toHaveTextContent('light')
      expect(document.documentElement.classList.contains('dark')).toBe(false)
    })

    it('writes updated theme to localStorage', async () => {
      const user = userEvent.setup()
      render(<ThemeProvider><ThemeConsumer /></ThemeProvider>)
      await user.click(screen.getByRole('button', { name: /toggle/i }))
      expect(localStorage.getItem('theme')).toBe('dark')
      await user.click(screen.getByRole('button', { name: /toggle/i }))
      expect(localStorage.getItem('theme')).toBe('light')
    })
  })

  describe('useTheme guard', () => {
    it('throws when used outside ThemeProvider', () => {
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})
      expect(() => render(<ThemeConsumer />)).toThrow(
        'useTheme must be used within a ThemeProvider',
      )
      consoleError.mockRestore()
    })
  })
})
