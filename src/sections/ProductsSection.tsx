import React from 'react';
import freelancerMark from '../assets/freelancer-mark.svg';
import CardList from '../components/CardList';
import Product from '../components/Product';
import Section from '../components/Section';
import Waitlist from '../components/Waitlist';
import { pageSections } from '../pageSections';

const products = [
  {
    // Copied verbatim from the Freelancer project (src/frontend/public/favicon.svg); re-copy if the
    // mark changes there. Decorative: the product name is the card heading.
    icon: <img src={freelancerMark} alt="" width={40} height={40} className="w-10 h-10" />,
    name: 'Freelancer',
    status: 'Beta' as const,
    description:
      'Freelancer helps independent consultants run the business side of their practice. Handle basic invoicing, timesheets, expenses, and more in one place, so you can spend less time on paperwork and more time on client work.',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <Section id={pageSections.products.id} title="Products">
      <CardList>
        {products.map((product) => (
          <Product
            key={product.name}
            {...product}
            action={<Waitlist productName={product.name} />}
          />
        ))}
      </CardList>
    </Section>
  );
};

export default ProductsSection;
