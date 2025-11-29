/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'system-ui', 'sans-serif'],
      },
    },
    screens: {
      'xxs': '340px',
      'xs': '480px',
      'sm': '640px',
      'md': '960px',
      'lg': '1200px',
      'xl': '1600px',
    },
    container: {
      center: true,
      screens: {
        'xxs': '340px',
        'xs': '480px',
        'sm': '640px',
        'md': '960px',
        'lg': '1200px',
        'xl': '1600px',
      },
    },
  },
  plugins: [],
}