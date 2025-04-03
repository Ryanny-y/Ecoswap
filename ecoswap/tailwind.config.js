/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '*.{html,js}',
    './pages/**/*.{html, js}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '0rem',
        lg: '0rem',
        xl: '0rem',
      }
    },
    extend: {
      colors: {
        'forest': "#2C5F2D",
        'sage': '#4b6741',
        'cream': "#fcf0da",
        'rust': '#D98E04'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      spacing: {
        '18': '72px',
        '100': '450px'
      }
    },
  },
  plugins: [],
}

