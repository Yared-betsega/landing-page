/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      },
      lineHeight:{
        '12':"3rem",
        '14': "4rem",
        '16': "5rem",
        '18': "6rem"
      }
    },
  },
  plugins: [],
}