import { render, screen } from '@testing-library/react';
import Service from './Service';

function renderService(props: Partial<React.ComponentProps<typeof Service>> = {}) {
  return render(
    <ul>
      <Service
        icon={<span />}
        title="Architecture"
        description="Build scalable systems."
        {...props}
      />
    </ul>,
  );
}

describe('Service', () => {
  it('renders as a list item with a level 3 heading and description', () => {
    renderService();
    const item = screen.getByRole('listitem');
    expect(screen.getByRole('heading', { level: 3, name: 'Architecture' })).toBeInTheDocument();
    expect(item).toHaveTextContent('Build scalable systems.');
  });

  it('renders the icon node', () => {
    renderService({ icon: <span data-testid="test-icon" /> });
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });
});
