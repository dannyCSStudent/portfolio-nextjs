/** @type {import('tailwindcss').Config} */

const isProduction = process.env.NODE_ENV === 'production';
console.log("MyUrl " + isProduction)
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": isProduction ? "url('/dannycsstudent.github.io/portfolio-nextjs/public/assets/herobg.png')" : "url('../public/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}
