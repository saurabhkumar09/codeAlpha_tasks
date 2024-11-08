/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#9966CC",
        secondary:"#556B2F",
        brandYellow:"#FFF9C4",
        brandGreen:"#C8E6C9",
        brandBlue:" #BBDEFB",
        brandWhite:"#eeeeee"
      },
      container:{
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem"
        }
      }
    },
  },
  plugins: [],
}