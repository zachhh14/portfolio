/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'san-serif'],
      monsterrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors:{
        'background-color' :'#1E2225',
      }
    },
  },
  plugins: [],
}

