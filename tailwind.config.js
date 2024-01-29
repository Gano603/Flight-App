/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mainImage1': "url(https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/brand/qsuite/h1-couple-dining-in-qsuite-hn.jpg)"
      }
    },
  },
  plugins: [],
}

