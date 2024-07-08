/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yellow: '#FFC567',
      pink: '#FB7DA8',
      orange: '#FD5A46',
      purple: '#552CB7',
      green: '#00995E',
      blue: '#058CD7',
      white: '#fff',
    },
    fontFamily: {
      bebas: ['Bebas Neue', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
