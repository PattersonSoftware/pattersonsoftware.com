import React, { type ReactNode } from 'react';

interface ServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({icon, title, description }: ServiceProps) => {
  return (
    <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 role="heading" className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p role="paragraph" className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}

export default Service;
