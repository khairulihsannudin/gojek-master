/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenNew:'#00880d',
        greenSkala: '#7CCC6C',
        purpleSkala:'#BD7AB3',
        orangeSkala:'#FF8F1C',
        blueSkala:'#4AC9E3',
        redBG:'#EE2737',
        blueBG: '#00AED6',
        greenBG:'#00AA13',
        purpleBG:'#93328E',
        pinkBG:'#DF1995'
      },
      fontFamily:{
        lato:['Lato', 'sans-serif'],
        opensans:['Open Sans', 'sans-serif'],

      }
    },
  },
  plugins: [],
}