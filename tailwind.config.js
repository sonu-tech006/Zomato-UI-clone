/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zomato: '#e23744',
        'zomato-dark': '#cb202d',
      }
    },
  },
  plugins: [],
}
