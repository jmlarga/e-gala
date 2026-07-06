/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a6859',
        secondary: '#7db168',
        accent: '#e1c778',
      }
    },
  },
  plugins: [],
}