import { render, screen } from '@testing-library/react';
import EmailLink from './EmailLink';

describe('EmailLink', () => {
  it('links to the address', () => {
    render(<EmailLink email="test@example.com" />);
    expect(screen.getByRole('link', { name: 'test@example.com' })).toHaveAttribute(
      'href',
      'mailto:test@example.com',
    );
  });

  it('prefills an encoded subject when provided', () => {
    render(<EmailLink email="test@example.com" subject="Hello & welcome" />);
    expect(screen.getByRole('link', { name: 'test@example.com' })).toHaveAttribute(
      'href',
      'mailto:test@example.com?subject=Hello%20%26%20welcome',
    );
  });
});
