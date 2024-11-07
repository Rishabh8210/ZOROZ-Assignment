/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#FCF6F4',
      },
      aspectRatio: {
        '9/12': '9 / 12',
      },
    },
  },
  plugins: [],
}

