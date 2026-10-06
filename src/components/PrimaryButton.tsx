import React from 'react';

type PrimaryButtonProps = React.ComponentProps<'button'> & {
  size?: 'md' | 'lg';
};

const sizeClasses = {
  md: 'px-6 py-2.5',
  lg: 'px-8 py-3',
} as const;

// Blue call-to-action button. Spreads remaining props (including `ref`), so it works as a Radix
// `asChild` trigger.
const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  size = 'md',
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
};

export default PrimaryButton;
