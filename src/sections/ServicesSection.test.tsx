import { render, screen, within } from '@testing-library/react';
import ServicesSection from './ServicesSection';

describe('ServicesSection', () => {
  it('renders as a landmark labelled Services', () => {
    render(<ServicesSection />);
    expect(screen.getByRole('region', { name: 'Services' })).toHaveAttribute('id', 'services');
  });

  it('renders each service as a list item with its own heading', () => {
    render(<ServicesSection />);
    const items = within(screen.getByRole('list')).getAllByRole('listitem');
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      expect(within(item).getByRole('heading', { level: 3 })).toBeInTheDocument();
    }
  });
});
