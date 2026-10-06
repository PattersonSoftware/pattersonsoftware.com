import { render, screen } from '@testing-library/react';
import CardList from './CardList';

describe('CardList', () => {
  it('renders an explicit list containing its items', () => {
    render(
      <CardList>
        <li>One</li>
        <li>Two</li>
      </CardList>,
    );
    const list = screen.getByRole('list');
    expect(list).toHaveAttribute('role', 'list');
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
