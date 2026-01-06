/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#442F2B', // your main text color
        accent: '#646cff',  // links/buttons accent
        background: '#242424', 
      },
      fontFamily: {
        h1: ['TimesNewCondensed', 'serif'],
        h2: ['TimesNewCondensed', 'serif'],
        body: ['CormorantGaramond', 'serif'],
        script: ['ParfumeriScript', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.07em', // for headings
        tight: '-0.02em',    // for body text
      },
    },
  },
  plugins: [],
}