/* eslint-disable quote-props */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#000000',
        'gray': '#F3F4F6',
        'light-gray': '#E2E3E5',
        'dark-gray': '#6B7280',
        'blue': '#5D5FEF',
        'light-blue': '#F0F9FF',
        'stroke': '#C4C4C4'
      },
      boxShadow: {
        'box-shadow': 'box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)'
      },
      gridTemplateColumns: {
        'grid': 'repeat(3, minmax(auto, 1fr))'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px'
    }
  },
  plugins: []
}
