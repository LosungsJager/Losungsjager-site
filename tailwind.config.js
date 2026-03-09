/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Suas cores personalizadas aqui
        equipe: {
          roxo: '#662D91',
          ciano: '#32C5D2',
        }
      }
    },
  },
  plugins: [],
}
