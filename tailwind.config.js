/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        "xs": "450px",
        "iphonesm" : { "max":"639px"},
        // "iphonemd" : "375px",
        // "iphonelg" : "414px" ,
        'tablet': {'min': '640px', 'max': '767px'}
      },

    },
  },
  plugins: [],
}