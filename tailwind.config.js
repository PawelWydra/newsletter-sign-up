/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoBold: ["roboto-bold", "sans"],
        robotoRegular: ["roboto-regular", "sans"],
      },
    },
  },
  plugins: [],
};
