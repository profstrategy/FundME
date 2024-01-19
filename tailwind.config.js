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
        "iphonesm" : "320px",
        "iphonemd" : "375px",
        "iphonelg" : "414px" ,
        // 'tablet': {'min': '1090px', 'max': '1220px'}
      },

    },
  },
  plugins: [],
}