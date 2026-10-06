import React from 'react';

export type ProductStatus = 'Beta' | 'Coming soon';

interface ProductProps {
  icon: React.ReactNode;
  name: string;
  status?: ProductStatus;
  description: string;
  action: React.ReactNode;
}

// Renders as a list item; place inside a <ul>.
const Product: React.FC<ProductProps> = ({ icon, name, status, description, action }) => {
  return (
    <li className="bg-card p-8 rounded-lg shadow-sm flex flex-col gap-4 md:flex-row md:items-start">
      <div className="text-blue-600 shrink-0">{icon}</div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-2xl font-semibold text-strong">{name}</h3>
          {status && (
            <span className="px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200">
              {status}
            </span>
          )}
        </div>
        <p className="text-lg text-body mb-6">{description}</p>
        {action}
      </div>
    </li>
  );
};

export default Product;
