/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4ade80',
        secondary: '#34d399',
        accent: '#22c55e',
      }
    },
  },
  plugins: [],
}
