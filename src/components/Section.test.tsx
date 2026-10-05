import { render, screen } from '@testing-library/react';
import Section from './Section';

describe('Section', () => {
  it('renders a region landmark named by its heading', () => {
    render(
      <Section id="example" title="Example">
        <p>Body</p>
      </Section>,
    );
    const region = screen.getByRole('region', { name: 'Example' });
    expect(region).toHaveAttribute('id', 'example');
    expect(region).toHaveTextContent('Body');
  });

  it('uses a level 2 heading', () => {
    render(
      <Section id="example" title="Example">
        <p>Body</p>
      </Section>,
    );
    expect(screen.getByRole('heading', { level: 2, name: 'Example' })).toBeInTheDocument();
  });
});
