import { render, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
  it("renders as a landmark labelled Let's Work Together", () => {
    render(<ContactSection />);
    expect(screen.getByRole('region', { name: "Let's Work Together" })).toHaveAttribute(
      'id',
      'contact',
    );
  });

  it('renders the contact trigger button', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /get in touch/i })).toBeInTheDocument();
  });
});
