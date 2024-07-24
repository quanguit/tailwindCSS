/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#C89F94",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      keyframes: {
         slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
         }
      },
      animation: {
        slideDown: "slideDown .4s ease-in-out",
      }
    },
  },
  plugins: [],
};
