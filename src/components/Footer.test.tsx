import { render, screen } from '@testing-library/react';
import { site } from '../siteConfig';
import Footer from './Footer';

describe('Footer', () => {
  it('renders a contentinfo landmark with the founding year through the current year', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      `© ${site.foundedYear} - ${new Date().getFullYear()} ${site.legalName}.`,
    );
  });
});
