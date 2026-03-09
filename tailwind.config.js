/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        equipe: {
          roxo: '#662D91',
          ciano: '#32C5D2',
        }
      }
    },
  },
  plugins: [],
}
