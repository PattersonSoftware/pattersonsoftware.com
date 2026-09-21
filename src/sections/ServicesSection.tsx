import { Boxes, Brain, Users, Pyramid, ChartNoAxesCombined, Sparkles } from 'lucide-react';
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
      title: "Strategy & Modernization",
      description: "Need help figuring out the next big thing, or massively out of date? I can help you set a direction for the future and modernize your applications while keeping the lights on."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI Acceleration",
      description: "Want to ship faster? I use AI coding agents like Claude Code to speed up prototypes, tests, and migrations, with architecture and quality still in experienced hands."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Knowledge Transfer",
      description: "All good things must end - I'll ensure that when I leave, you have the documentation and knowledge you need to continue without me."
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 role="heading" className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">Services</h2>
        <div role="grid" className="grid md:grid-cols-3 gap-8">
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
