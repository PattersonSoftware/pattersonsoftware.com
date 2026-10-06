import React from 'react';

interface CardListProps {
  className?: string;
  children: React.ReactNode;
}

// A <ul> for card grids; children should be <li> cards (Service, Product).
const CardList: React.FC<CardListProps> = ({ className = '', children }) => {
  return (
    // role="list" restores list semantics that Safari drops when list-style is removed.
    // oxlint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list" className={`grid gap-8 ${className}`}>
      {children}
    </ul>
  );
};

export default CardList;
