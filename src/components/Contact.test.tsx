import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { site } from '../siteConfig';
import Contact from './Contact';

// Open/close behaviour is covered by Modal.test.tsx; this only checks Contact's content.
describe('Contact', () => {
  it('opens a Contact Me dialog with the inquiries email link', async () => {
    const user = userEvent.setup();
    render(<Contact />);
    await user.click(screen.getByRole('button', { name: 'Get in Touch' }));
    expect(screen.getByRole('dialog', { name: 'Contact Me' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: site.contactEmail })).toHaveAttribute(
      'href',
      `mailto:${site.contactEmail}`,
    );
  });
});
