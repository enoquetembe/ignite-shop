/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-500': '#00875F',
        'green-300': '#00B37E',

        'gray-900': '#121212',
        'gray-800': '#202024',
        'gray-300': '#c4c4cc',
        'gray-100': '#e1e1e6',

        'white': '#ffff'
      },

      fontSize: {
        'md': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '2rem',
      }
    },
  },
  plugins: [],
}
