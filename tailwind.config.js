/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2c6248',
        secondary: '#06292e',
        accent: '#ff9300',
        deepAccent: '#dd9300',
      },
      keyframes: {
        slidePageUp: {
          '0%': { transform: 'translateY(5%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
      },
      animation: {
        slidePageUp: '1s ease-out 0s 1 slidePageUp',
        fadeIn: '1s ease-out 0s 1 fadeIn',
      },
    },
  },
  plugins: [],
};
