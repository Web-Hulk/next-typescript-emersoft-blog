/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "emersoft-black": "#373a47",
        "emersoft-green": "#15f2b8",
      },
    },
  },
  plugins: [],
};
