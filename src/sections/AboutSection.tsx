import React from 'react';
import Section from '../components/Section';
import { site, yearsOfExperience } from '../siteConfig';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm space-y-4 text-lg text-slate-700 dark:text-slate-300">
        <p>
          Founded in {site.foundedYear}, {site.name} is an independent consultancy focused on
          software architecture, leadership, mentoring, strategy, and system stability and
          robustness. With deep expertise in several ecosystems, including .NET and Python, I can
          help your organization build better software through sound architectural decisions and
          effective team development.
        </p>
        <p>
          Whether you need to design a new system, improve existing architecture, or develop your
          team's technical capabilities, I bring over {yearsOfExperience()} years of hands-on
          experience and proven methodologies to help you succeed.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
