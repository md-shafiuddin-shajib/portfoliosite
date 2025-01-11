import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Tour Booking Management System',
    description: 'Built an industry-ready platform using React.js, Node.js, Express.js, and MongoDB. It offers seamless booking, customer management, and reservation functionalities.',
    github: 'https://github.com/md-shafiuddin-shajib/travelbooking.git',
  },
  {
    title: 'Food Delivery Website',
    description: 'Designed a dynamic platform with React.js, Redux, and Tailwind CSS for browsing menus, managing orders, and tracking deliveries.',
    github: 'https://github.com/md-shafiuddin-shajib/Food-Delivery.git',
  },
  {
    title: 'E-Commerce Website',
    description: 'Developed a feature-rich e-commerce platform using React.js, Redux, and Tailwind CSS for product listings, shopping cart, and checkout processes.',
    github: 'https://github.com/md-shafiuddin-shajib/Ecommer-react.git',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-700 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;