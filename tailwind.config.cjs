/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          "background-green": "#071529",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
