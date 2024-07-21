/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        13 : '3.25rem',
      },
      fontFamily: {
        inter : ['Inter'],
      },
      colors: {
        aufa : '#bada55',
        kopi : '#c0ffee',
      },
    },
  },
  plugins: [],
}

