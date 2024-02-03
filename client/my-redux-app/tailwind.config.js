/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{ts,js,jsx,tsx,html}",
  "./public/index.html", 
],
  theme: {
    extend: {
      backgroundColor:{
        'main-50': '#EDEFF6',
        'main-100': '#DBDEF6',
        'main-200': '#B7BFD9',
        'main-300': '#92A0C7',
        'main-400': '#6E804B',
        'main-500': '#4A60A1',
        'main-600': '#3B4D81',
        'main-700': '#2C3A61',
        'main-800': '#1E2640',
        'main-900': '#0F1320',
        'overlay-70': ' rgba(0,0,0,0.7)',
        'overlay-30': ' rgba(0,0,0,0.3)',
        'overlay-50': ' rgba(0,0,0,0.5)',

      },
      colors:{
        'main-50': '#EDEFF6',
        'main-100': '#DBDEF6',
        'main-200': '#B7BFD9',
        'main-300': '#92A0C7',
        'main-400': '#6E804B',
        'main-500': '#4A60A1',
        'main-600': '#3B4D81',
        'main-700': '#2C3A61',
        'main-800': '#1E2640',
        'main-900': '#0F1320',
      },
      width:{
        'main': '1319px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}