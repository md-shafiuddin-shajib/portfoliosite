/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cornsilk: '#FFF8DC',
        bisque: '#FFE4C4',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        slideUp: 'slideUp 1s ease-out',
      },
    },
  },
  plugins: [],
};