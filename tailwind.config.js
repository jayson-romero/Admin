/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#6DAFFE',
      'dark-blue': '#437FC7',
      'light-blue': '#EDF6FF',
      'accent': '#B9732F',
      'red': '#F17A7E',
      'green': '#699E3C',
      'white': '#FFFFFF',
      'black': '#082340',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}