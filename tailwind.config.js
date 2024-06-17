/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '2048px'},
      'xl': {'max': '1440px'},
      'lg': {'max': '1024px'},
      'md': {'max': '834px'},
      'sm': {'max': '640px'},
      'xs': {'max': '375px'},
      '2xs': {'max': '320px'}
    }
  },
  plugins: [],
}
