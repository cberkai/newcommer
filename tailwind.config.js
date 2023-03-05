/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'commer-orange' : "#FF9800",
        'commer-blue' : "#222F3F"
      },
      fontFamily: {
        
        heading: [ 'Figtree', "sans-serif"],
      },
    },
  },
  plugins: [],
}
