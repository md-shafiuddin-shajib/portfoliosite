import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'mdshafiuddinshajib@gmail.com',
    href: 'mailto:mdshafiuddinshajib@gmail.com',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '+8801700651993',
    href: 'tel:+8801700651993',
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://linkedin.com/in/md-shafiuddin-shajib-57a272206',
  },
  {
    icon: <Github className="w-6 h-6" />,
    label: 'GitHub',
    value: 'View GitHub Profile',
    href: 'https://github.com/md-shafiuddin-shajib',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-800 mb-12">
          Contact Me
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-cyan-600 mb-3">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-cyan-700 mb-2">
                {contact.label}
              </h3>
              <p className="text-gray-600 text-center">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;