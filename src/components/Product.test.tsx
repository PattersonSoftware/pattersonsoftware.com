import { render, screen } from '@testing-library/react';
import Product from './Product';

function renderProduct(props: Partial<React.ComponentProps<typeof Product>> = {}) {
  return render(
    <ul>
      <Product
        icon={<span />}
        name="Widget"
        description="Does widget things."
        action={<button type="button">Act</button>}
        {...props}
      />
    </ul>,
  );
}

describe('Product', () => {
  it('renders as a list item with a level 3 heading, description, and action', () => {
    renderProduct();
    const item = screen.getByRole('listitem');
    expect(screen.getByRole('heading', { level: 3, name: 'Widget' })).toBeInTheDocument();
    expect(item).toHaveTextContent('Does widget things.');
    expect(screen.getByRole('button', { name: 'Act' })).toBeInTheDocument();
  });

  it('shows a status badge when provided', () => {
    renderProduct({ status: 'Beta' });
    expect(screen.getByText('Beta')).toBeInTheDocument();
  });

  it('omits the status badge when not provided', () => {
    renderProduct();
    expect(screen.getByRole('listitem')).not.toHaveTextContent('Beta');
  });
});
