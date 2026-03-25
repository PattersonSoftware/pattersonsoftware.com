import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <h2 role="heading" className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-8">About</h2>
        <div role="article" className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm">
          <p role="paragraph" className="text-lg text-slate-700 dark:text-slate-300 mb-4">
            Founded in 2022, Patterson Software is an independent consultancy focused on software architecture, leadership, mentoring, strategy, and system stability and robustness. With deep expertise in several ecosystems, including .NET and Python, I can help your organization build better software through sound architectural decisions and effective team development.
          </p>
          <p role="paragraph" className="text-lg text-slate-700 dark:text-slate-300">
            Whether you need to design a new system, improve existing architecture, or develop your team's technical capabilities, I bring over 16 years of hands-on experience and proven methodologies to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
