import { Briefcase, CodeXml, Users } from 'lucide-react';
import React from 'react';
import Service from '../components/Service';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <CodeXml className="w-8 h-8" />,
      title: "Software Architecture",
      description: "Designing scalable, maintainable systems using .NET and Python/Django frameworks with proven architectural patterns."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Leadership",
      description: "Leading development teams to deliver high-quality software on time through agile methodologies and best practices."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Technical Mentoring",
      description: "Mentoring developers to advance their skills in .NET, Python, and Django through hands-on guidance and code reviews."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
