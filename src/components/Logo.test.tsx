import { render, screen } from '@testing-library/react';
import { site } from '../siteConfig';
import Logo from './Logo';

describe('Logo', () => {
  it('renders the logo image with the company name as alt text', () => {
    render(<Logo />);
    const img = screen.getByRole('img', { name: site.legalName });
    expect(img.getAttribute('src')).toBeTruthy();
    expect(img).toHaveAttribute('width', '225');
    expect(img).toHaveAttribute('height', '100');
  });

  it('accepts a custom className', () => {
    render(<Logo className="my-logo" />);
    expect(screen.getByRole('img', { name: site.legalName })).toHaveClass('my-logo');
  });
});
