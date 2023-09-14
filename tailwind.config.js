/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      transitionProperty : {
        'width' : 'width ease-in',
        'height' : 'height ease-in 300'
      },
      height : {
        'home' : '500px'
      }
    },
  },
  plugins: [],
}

