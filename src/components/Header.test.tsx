import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useTheme } from '../context/ThemeContext'
import Header from './Header'

vi.mock('../context/ThemeContext', () => ({
  useTheme: vi.fn(() => ({ theme: 'light' as const, toggleTheme: vi.fn() })),
}))

describe('Header', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByAltText('Patterson Software, LLC')).toBeInTheDocument()
  })

  it('renders a header element', () => {
    const { container } = render(<Header />)
    expect(container.querySelector('header')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Header />)
    expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: /about/i })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: /contact/i })).toHaveLength(1)
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument()
  })

  it('mobile menu is closed initially', () => {
    render(<Header />)
    // Only desktop nav links present (1 of each)
    expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(1)
  })

  it('opens mobile menu when button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    // Desktop + mobile = 2 of each
    expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /about/i })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: /contact/i })).toHaveLength(2)
  })

  it('closes mobile menu when the menu button is clicked again', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(1)
    })
  })

  it('closes mobile menu when the Services link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    await user.click(screen.getAllByRole('link', { name: /services/i })[1])
    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(1)
    })
  })

  it('closes mobile menu when the About link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    await user.click(screen.getAllByRole('link', { name: /about/i })[1])
    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: /about/i })).toHaveLength(1)
    })
  })

  it('closes mobile menu when the Contact link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    await user.click(screen.getAllByRole('link', { name: /contact/i })[1])
    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: /contact/i })).toHaveLength(1)
    })
  })

  it('mobile nav links have correct href attributes', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    const mobileLinks = [
      screen.getAllByRole('link', { name: /services/i })[1],
      screen.getAllByRole('link', { name: /about/i })[1],
      screen.getAllByRole('link', { name: /contact/i })[1],
    ]
    expect(mobileLinks[0]).toHaveAttribute('href', '#services')
    expect(mobileLinks[1]).toHaveAttribute('href', '#about')
    expect(mobileLinks[2]).toHaveAttribute('href', '#contact')
  })

  it('can reopen the mobile menu after it has been closed', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /menu/i }))
    await user.click(screen.getByRole('button', { name: /menu/i }))
    await waitFor(() => {
      expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(1)
    })
    await user.click(screen.getByRole('button', { name: /menu/i }))
    expect(screen.getAllByRole('link', { name: /services/i })).toHaveLength(2)
  })

  it('nav links have correct href attributes', () => {
    render(<Header />)
    const servicesLinks = screen.getAllByRole('link', { name: /services/i })
    expect(servicesLinks[0]).toHaveAttribute('href', '#services')
  })

  describe('theme toggle', () => {
    it('renders the toggle button with "Switch to dark mode" label in light mode', () => {
      render(<Header />)
      expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
    })

    it('renders "Switch to light mode" label when in dark mode', () => {
      vi.mocked(useTheme).mockReturnValue({ theme: 'dark', toggleTheme: vi.fn() })
      render(<Header />)
      expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
    })

    it('calls toggleTheme when the toggle button is clicked', async () => {
      const mockToggle = vi.fn()
      vi.mocked(useTheme).mockReturnValue({ theme: 'light', toggleTheme: mockToggle })
      const user = userEvent.setup()
      render(<Header />)
      await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))
      expect(mockToggle).toHaveBeenCalledOnce()
    })
  })

  describe('responsive visibility classes', () => {
    it('mobile menu button is marked to hide on medium+ screens', () => {
      render(<Header />)
      expect(screen.getByRole('button', { name: /menu/i })).toHaveClass('md:hidden')
    })

    it('desktop nav is marked to hide on small screens', () => {
      const { container } = render(<Header />)
      const desktopNav = container.querySelector('.hidden.md\\:flex')
      expect(desktopNav).toBeInTheDocument()
    })

    it('mobile nav panel is marked to hide on medium+ screens when open', async () => {
      const user = userEvent.setup()
      const { container } = render(<Header />)
      await user.click(screen.getByRole('button', { name: /menu/i }))
      const mobileNav = container.querySelector('.md\\:hidden.py-4')
      expect(mobileNav).toBeInTheDocument()
    })
  })
})
