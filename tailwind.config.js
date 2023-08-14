/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{html,ts}',
    './src/index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Andy-Bold', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        'light': '0 16px 4px rgba(255,255,255,0.06)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
