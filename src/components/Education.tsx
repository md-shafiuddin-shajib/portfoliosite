import React from 'react';

const educationData = [
  {
    degree: "Bachelor's Degree",
    field: "Computer Science and Engineering",
    institution: "International University of Business Agriculture and Technology",
    period: "Jan 2021 - Dec 2024",
    grade: "CGPA: 3.73/4.00",
  },
  {
    degree: "High School Certificate (HSC)",
    institution: "Adhyapak Abdul Majid College, Cumilla",
    period: "Jul 2017 - Apr 2019",
    grade: "GPA: 5.00/5.00",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-12">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-700">{edu.degree}</h3>
                  {edu.field && (
                    <p className="text-gray-600 mt-1">{edu.field}</p>
                  )}
                  <p className="text-gray-500 mt-1">{edu.institution}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-cyan-600">{edu.period}</p>
                  <p className="font-semibold text-cyan-800">{edu.grade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;