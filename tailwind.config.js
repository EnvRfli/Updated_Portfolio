/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#1e293b',
        'neo-card': '#fdfbf7',
        'neo-primary': '#e05236',
        'neo-secondary': '#c9a690',
        'neo-border': '#171717',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'brutal-sm': '2px 2px 0px 0px #171717',
        'brutal': '4px 4px 0px 0px #171717',
        'brutal-lg': '8px 8px 0px 0px #171717',
        'brutal-active': '0px 0px 0px 0px #171717',
      },
      translate: {
        'brutal-active-sm': '2px',
        'brutal-active': '4px',
        'brutal-active-lg': '8px',
      }
    },
  },
  plugins: [],
}
