import React, { type ReactNode } from 'react';

interface ServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
}

// Renders as a list item; place inside a <ul>.
const Service: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <li className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </li>
  );
};

export default Service;
