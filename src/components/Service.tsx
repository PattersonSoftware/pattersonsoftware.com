import React, { type ReactNode } from 'react';

interface ServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({icon, title, description }: ServiceProps) => {
  return (
    <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}

export default Service;
