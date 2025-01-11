import React from 'react';

const skillCategories = [
  {
    title: 'Programming and Development',
    skills: ['JavaScript', 'React.js', 'Redux', 'Tailwind CSS', 'MySQL', 'MongoDB', 'C', 'C++', 'Java'],
  },
  {
    title: 'Software Engineering',
    skills: ['Software Engineering Practices', 'Systems Design', 'Operating Systems', 'Algorithms', 'Data Structures'],
  },
  {
    title: 'Soft Skills',
    skills: ['Analytical Skills'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-12">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-700 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm animate-fadeIn"
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;