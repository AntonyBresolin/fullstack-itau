/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero1': "url('/src/assets/img/hero1.png')"
      }
    },
  },
  plugins: [],
}

