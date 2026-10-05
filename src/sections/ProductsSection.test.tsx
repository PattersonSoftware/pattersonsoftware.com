import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductsSection from './ProductsSection';

describe('ProductsSection', () => {
  it('renders as a landmark labelled Products', () => {
    render(<ProductsSection />);
    expect(screen.getByRole('region', { name: 'Products' })).toHaveAttribute('id', 'products');
  });

  it('lists Freelancer as a beta product', () => {
    render(<ProductsSection />);
    const item = within(screen.getByRole('list')).getByRole('listitem');
    expect(within(item).getByRole('heading', { level: 3, name: 'Freelancer' })).toBeInTheDocument();
    expect(within(item).getByText('Beta')).toBeInTheDocument();
  });

  it('shows the coming-soon waitlist dialog from the Freelancer card', async () => {
    const user = userEvent.setup();
    render(<ProductsSection />);
    await user.click(screen.getByRole('button', { name: 'Join the List' }));
    expect(screen.getByRole('dialog')).toHaveAccessibleDescription(/coming soon/i);
  });
});
