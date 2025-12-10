import { Binary, Boxes, Brain, Users, Pyramid, ChartNoAxesCombined } from 'lucide-react';
import React from 'react';
import Service from '../components/Service';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Boxes className="w-8 h-8" />,
      title: "Architecture",
      description: "Need help designing a scalable, maintainable system using .NET, Python, Ruby, or Java? I can help you build it with proven architectural patterns."
    },
    {
      icon: <Pyramid className="w-8 h-8" />,
      title: "Leadership",
      description: "Ship without a captain? I have a proven track record of leading development teams that deliver high-quality software on time."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Mentoring",
      description: "Lots of raw talent? I can help your developers advance their skills in your tech stack through weekly 1-1 meetings, pairing, and code reviews."
    },
    {
      icon: <ChartNoAxesCombined className="w-8 h-8" />,
      title: "Strategy",
      description: "Need help figuring out the next big thing? I can help you position your organization for success well into the future."
    },
    {
      icon: <Binary className="w-8 h-8" />,
      title: "Technology Leaps",
      description: "Massively out of date? I can help you bring your applications forward to the modern age through a proven methodology, keeping the lights on when it's happening."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Knowledge Transfer",
      description: "All good things must end - I'll ensure that when I leave, you have the documentation and knowledge you need to continue without me."
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
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
