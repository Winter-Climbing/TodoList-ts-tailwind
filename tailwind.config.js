/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flex: {
        1: "1 0 auto",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
