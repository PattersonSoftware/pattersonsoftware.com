import { BriefcaseBusiness } from 'lucide-react';
import React from 'react';
import Product from '../components/Product';
import Section from '../components/Section';
import Waitlist from '../components/Waitlist';

const products = [
  {
    icon: <BriefcaseBusiness className="w-10 h-10" />,
    name: 'Freelancer',
    status: 'Beta',
    description:
      'Now in beta, Freelancer helps independent consultants run the business side of their practice. Handle basic invoicing, timesheets, expenses, and more in one place, so you can spend less time on paperwork and more time on client work.',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <Section id="products" title="Products">
      {/* role="list" restores list semantics that Safari drops when list-style is removed. */}
      {/* oxlint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className="grid gap-8">
        {products.map((product) => (
          <Product
            key={product.name}
            {...product}
            action={<Waitlist productName={product.name} />}
          />
        ))}
      </ul>
    </Section>
  );
};

export default ProductsSection;
