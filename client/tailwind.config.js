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
      },
      textColor: {
        'primary': '#111827',
      },
      fontFamily: {
        veneer: ['VeneerTwo', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        body: { fontFamily: theme('fontFamily.veneer') },
      });
    },
  ],
}

