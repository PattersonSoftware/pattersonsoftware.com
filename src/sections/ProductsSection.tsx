import { BriefcaseBusiness } from 'lucide-react';
import React from 'react';
import CardList from '../components/CardList';
import Product from '../components/Product';
import Section from '../components/Section';
import Waitlist from '../components/Waitlist';
import { pageSections } from '../pageSections';

const products = [
  {
    icon: <BriefcaseBusiness className="w-10 h-10" />,
    name: 'Freelancer',
    status: 'Beta' as const,
    description:
      'Now in beta, Freelancer helps independent consultants run the business side of their practice. Handle basic invoicing, timesheets, expenses, and more in one place, so you can spend less time on paperwork and more time on client work.',
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
