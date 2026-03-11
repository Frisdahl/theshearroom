/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#d4a373',
        'dark': '#1a1a1a',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Manrope', 'sans-serif'],
        'heading': ['Urbanist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
