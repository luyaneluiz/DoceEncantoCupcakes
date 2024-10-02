/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pink: "#E09796",
        grey: "#8d8d8d",
        light: "#F9F9F9",
        
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        playball: ["Playball", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      backgroundImage: {
        'banner': "url(../assets/Background.png)"
      }
    },
  },
  plugins: [],
}