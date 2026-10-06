import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
  it('renders a non-submitting button by default', () => {
    render(<PrimaryButton>Go</PrimaryButton>);
    expect(screen.getByRole('button', { name: 'Go' })).toHaveAttribute('type', 'button');
  });

  it('passes through props such as onClick and aria attributes', async () => {
    const onClick = vi.fn<() => void>();
    const user = userEvent.setup();
    render(
      <PrimaryButton onClick={onClick} aria-haspopup="dialog">
        Go
      </PrimaryButton>,
    );
    const button = screen.getByRole('button', { name: 'Go' });
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await user.click(button);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('forwards its ref to the button element', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<PrimaryButton ref={ref}>Go</PrimaryButton>);
    expect(ref.current).toBe(screen.getByRole('button', { name: 'Go' }));
  });
});
