/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexand: ["Radio Canada", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: " #101B48",
        secondary: "#5A699E",
        background: "#F3F6FF",
        backgroundtwo:"#E7ECFF",
      },
    },
  },
  plugins: [],
};
