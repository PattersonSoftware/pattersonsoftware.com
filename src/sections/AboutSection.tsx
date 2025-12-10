import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-8">About</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <p className="text-lg text-slate-700 mb-4">
            Patterson Software provides expert consulting services focused on software architecture, team leadership, and technical mentoring. With deep expertise in .NET and Python/Django ecosystems, I help organizations build better software through sound architectural decisions and effective team development.
          </p>
          <p className="text-lg text-slate-700">
            Whether you need to design a new system, improve existing architecture, or develop your team's technical capabilities, I bring hands-on experience and proven methodologies to help you succeed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
