import { render, screen } from '@testing-library/react';
import { site, yearsOfExperience } from '../siteConfig';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('renders as a landmark labelled About', () => {
    render(<AboutSection />);
    expect(screen.getByRole('region', { name: 'About' })).toHaveAttribute('id', 'about');
  });

  it('shows the founding year and current years of experience', () => {
    render(<AboutSection />);
    expect(screen.getByText(new RegExp(`Founded in ${site.foundedYear}`))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`over ${yearsOfExperience()} years`))).toBeInTheDocument();
  });
});
