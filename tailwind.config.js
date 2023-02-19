/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: "#__next",
  theme: {
    extend: {
      colors: {
        "emersoft-black": "#373a47",
        "emersoft-green": "#15f2b8",
        linkedin: "#0077B5",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
