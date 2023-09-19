/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lexend': ['Lexend Deca', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Open Sans': ['Open Sans', 'sans-serif']
      },
      colors: {
        'primary': '#1c61e7',
        'secondary': '#e6effd',
      },
      gridTemplateColumns: {
        'open': '270px 1fr',
        'close': '60px 1fr',
      },
      borderRadius: {
        'ROne': '10px'
      }
    },
  },
  plugins: [],
}
