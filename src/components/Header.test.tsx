import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useTheme } from '../context/useTheme';
import Header from './Header';

vi.mock('../context/useTheme', () => ({
  useTheme: vi.fn<typeof useTheme>(() => ({
    theme: 'light' as const,
    toggleTheme: vi.fn<() => void>(),
  })),
}));

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const menuButton = () => screen.getByRole('button', { name: 'Menu' });
const mobileMenu = () => document.getElementById('mobile-menu')!;

describe('Header', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  it('renders a banner landmark containing the main navigation', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toContainElement(
      screen.getByRole('navigation', { name: 'Main' }),
    );
  });

  it('renders the logo as a link', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Patterson Software, LLC' })).toHaveAttribute(
      'href',
      '#top',
    );
  });

  it.each(NAV_LINKS)('renders a $name link to $href', ({ name, href }) => {
    render(<Header />);
    expect(screen.getByRole('link', { name })).toHaveAttribute('href', href);
  });

  describe('mobile menu', () => {
    it('is collapsed initially', () => {
      render(<Header />);
      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
      expect(menuButton()).toHaveAttribute('aria-controls', 'mobile-menu');
      expect(mobileMenu()).not.toBeVisible();
    });

    it('expands and collapses when the menu button is clicked', async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(menuButton());
      expect(menuButton()).toHaveAttribute('aria-expanded', 'true');
      expect(mobileMenu()).toBeVisible();

      await user.click(menuButton());
      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
      expect(mobileMenu()).not.toBeVisible();
    });

    it.each(NAV_LINKS)('closes when the $name link is clicked', async ({ name }) => {
      const user = userEvent.setup();
      render(<Header />);
      await user.click(menuButton());
      // The visible link is the mobile one; the desktop list is display:none only via CSS.
      const links = screen.getAllByRole('link', { name });
      await user.click(links[links.length - 1]);
      expect(menuButton()).toHaveAttribute('aria-expanded', 'false');
      expect(mobileMenu()).not.toBeVisible();
    });
  });

  describe('theme toggle', () => {
    it('offers dark mode when the theme is light', () => {
      render(<Header />);
      expect(screen.getByRole('button', { name: 'Switch to dark mode' })).toBeInTheDocument();
    });

    it('offers light mode when the theme is dark', () => {
      vi.mocked(useTheme).mockReturnValue({ theme: 'dark', toggleTheme: vi.fn<() => void>() });
      render(<Header />);
      expect(screen.getByRole('button', { name: 'Switch to light mode' })).toBeInTheDocument();
    });

    it('calls toggleTheme when clicked', async () => {
      const toggleTheme = vi.fn<() => void>();
      vi.mocked(useTheme).mockReturnValue({ theme: 'light', toggleTheme });
      const user = userEvent.setup();
      render(<Header />);
      await user.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
      expect(toggleTheme).toHaveBeenCalledOnce();
    });
  });
});
