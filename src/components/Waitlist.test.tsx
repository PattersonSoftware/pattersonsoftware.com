import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Waitlist from './Waitlist';

describe('Waitlist', () => {
  it('opens a coming-soon dialog when Join the List is clicked', async () => {
    const user = userEvent.setup();
    render(<Waitlist productName="Freelancer" />);
    await user.click(screen.getByRole('button', { name: 'Join the List' }));
    expect(screen.getByRole('dialog', { name: 'Freelancer Waitlist' })).toHaveAccessibleDescription(
      'The waitlist is coming soon.',
    );
  });
});
