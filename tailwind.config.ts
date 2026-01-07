/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#442F2B", 
        accent: "#646cff", 
        background: "#242424",
      },
      fontFamily: {
        h1: ["TimesNewCondensed", "serif", "2.25rem", "1.1"],
        h2: ["TimesNewCondensed", "serif", "1.875rem", "1.15"],
        h3: ["1.5rem", "1.2"], // 24px
        h4: ["1.25rem", "1.3"], // 20px
        h5: ["1.125rem", "1.3"], // 18px
        h6: ["1rem", "1.4"],
        body: ["CormorantGaramond", "serif", "1rem", "1.6"],
        script: ["ParfumeriScript", "cursive"],
      },
      letterSpacing: {
        tightest: "-0.07em", // for headings
        tight: "-0.02em", // for body text
      },
    },
  },
  plugins: [],
};
