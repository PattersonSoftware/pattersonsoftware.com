import { Boxes, Brain, ChartNoAxesCombined, Pyramid, Sparkles, Users } from 'lucide-react';
import React from 'react';
import Section from '../components/Section';
import Service from '../components/Service';

const iconClassName = 'w-8 h-8';

const services = [
  {
    icon: <Boxes className={iconClassName} />,
    title: 'Architecture',
    description:
      'Need help designing a scalable, maintainable system using .NET, Python, Ruby, or Java? I can help you build it with proven architectural patterns.',
  },
  {
    icon: <Pyramid className={iconClassName} />,
    title: 'Leadership',
    description:
      'Ship without a captain? I have a proven track record of leading development teams that deliver high-quality software on time.',
  },
  {
    icon: <Users className={iconClassName} />,
    title: 'Mentoring',
    description:
      'Lots of raw talent? I can help your developers advance their skills in your tech stack through weekly 1-1 meetings, pairing, and code reviews.',
  },
  {
    icon: <ChartNoAxesCombined className={iconClassName} />,
    title: 'Strategy & Modernization',
    description:
      'Need help figuring out the next big thing, or massively out of date? I can help you set a direction for the future and modernize your applications while keeping the lights on.',
  },
  {
    icon: <Sparkles className={iconClassName} />,
    title: 'AI Acceleration',
    description:
      'Want to ship faster? I use AI coding agents like Claude Code to speed up prototypes, tests, and migrations, with architecture and quality still in experienced hands.',
  },
  {
    icon: <Brain className={iconClassName} />,
    title: 'Knowledge Transfer',
    description:
      "All good things must end - I'll ensure that when I leave, you have the documentation and knowledge you need to continue without me.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Section id="services" title="Services" width="wide" className="bg-white dark:bg-slate-900">
      {/* role="list" restores list semantics that Safari drops when list-style is removed. */}
      {/* oxlint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul role="list" className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Service key={service.title} {...service} />
        ))}
      </ul>
    </Section>
  );
};

export default ServicesSection;
