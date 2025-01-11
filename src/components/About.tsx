import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed animate-fadeIn">
            I am a soon-to-be graduate with a Bachelor's degree in Computer Science and Engineering, 
            equipped with a solid foundation in software engineering principles. I have hands-on 
            experience with JavaScript and React, and I enjoy building user-friendly web applications. 
            I am also passionate about research-based and analytical work, where I can explore 
            innovative solutions to complex problems. I am eager to apply my skills and continue 
            learning through internship or entry-level opportunities in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;