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
      },
      boxShadow: {
        '8xl':'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }
    },
  },
  plugins: [],
}

// , 0px 6px 6px rgba(0, 0, 0, 0.23)
