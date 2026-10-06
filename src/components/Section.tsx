import React from 'react';
import { scrollMarginBelowHeader } from '../layout';

interface SectionProps {
  id: string;
  title: string;
  width?: 'narrow' | 'wide';
  children: React.ReactNode;
}

const widthClasses = {
  narrow: 'max-w-4xl',
  wide: 'max-w-7xl',
} as const;

// Standard page section: anchor target for the nav, labelled landmark, and consistent spacing.
const Section: React.FC<SectionProps> = ({ id, title, width = 'narrow', children }) => {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`py-16 px-4 sm:px-6 lg:px-8 ${scrollMarginBelowHeader}`}
    >
      <div className={`${widthClasses[width]} mx-auto`}>
        <h2 id={headingId} className="text-4xl font-bold text-center text-strong mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
