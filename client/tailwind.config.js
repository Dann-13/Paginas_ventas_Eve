/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#D52F1F',
        'brownPrimary': '#3E2420'
      },

      textColor: {
        'primary': '#111827',
        'brownPrimary': '#3E2420'
      },
      fontFamily: {
        veneer: ['VeneerTwo', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#D52F1F',
      },
    },
  },
}

