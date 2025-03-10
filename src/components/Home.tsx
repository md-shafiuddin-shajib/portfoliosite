import React from 'react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-800 mb-4 animate-fadeIn">
              Md Shafiuddin Shajib
            </h1>
            <h2 className="text-xl md:text-2xl text-cyan-600 mb-6 animate-slideUp">
              Software Engineer | React Developer | JavaScript | Web Developer
            </h2>
            <div className="space-x-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-block px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg hover:bg-cyan-600 hover:text-white transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQG1NOOJC0n3qw/profile-displayphoto-shrink_800_800/B56ZVRY7VAHoAc-/0/1740827245268?e=1747267200&v=beta&t=AGxvlNOUTwdflG-awkKpX4EVs8XhN0_O0RqA8n5ObYE"
                alt="Md Shafiuddin Shajib"
                className="rounded-full shadow-xl animate-fadeIn object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-cyan-500 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
