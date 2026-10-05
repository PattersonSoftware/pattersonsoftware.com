import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { site } from '../siteConfig';
import Waitlist from './Waitlist';

describe('Waitlist', () => {
  it('opens a dialog asking visitors to email inquiries', async () => {
    const user = userEvent.setup();
    render(<Waitlist productName="Freelancer" />);
    await user.click(screen.getByRole('button', { name: 'Join the List' }));
    const dialog = screen.getByRole('dialog', { name: 'Freelancer Waitlist' });
    expect(dialog).toHaveAccessibleDescription(/coming soon.*email us/i);
    expect(screen.getByRole('link', { name: site.contactEmail })).toHaveAttribute(
      'href',
      `mailto:${site.contactEmail}?subject=Freelancer%20waitlist`,
    );
  });
});
