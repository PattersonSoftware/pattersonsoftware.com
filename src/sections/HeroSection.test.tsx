import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
  it('renders the page-level heading', () => {
    render(<HeroSection />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Custom Solutions For Your Needs' }),
    ).toBeInTheDocument();
  });

  it('renders the contact trigger button', () => {
    render(<HeroSection />);
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
  });
});
