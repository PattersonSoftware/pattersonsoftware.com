import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

function renderModal() {
  return render(
    <Modal trigger={<button type="button">Open</button>} title="Title" description="Description">
      <p>Extra content</p>
    </Modal>,
  );
}

describe('Modal', () => {
  it('is closed initially', () => {
    renderModal();
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('opens a dialog named by its title and described by its description', async () => {
    const user = userEvent.setup();
    renderModal();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    const dialog = screen.getByRole('dialog', { name: 'Title' });
    expect(dialog).toHaveAccessibleDescription('Description');
    expect(dialog).toHaveTextContent('Extra content');
  });

  it('closes when the Close button is clicked', async () => {
    const user = userEvent.setup();
    renderModal();
    await user.click(screen.getByRole('button', { name: 'Open' }));
    await user.click(screen.getByRole('button', { name: 'Close' }));
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});
