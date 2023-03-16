// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          "background-green": "#071529",
          "primary-green": "#37F2AD",
          "primary-text": "#FAFAFA",
        },
      },
      backgroundImage: {
        "gradient-button":
          "linear-gradient(253.13deg, rgba(55, 242, 173, 0.5) -36.93%, rgba(55, 152, 242, 0.5) 148.87%);",
      },
      fontFamily: {
        sans: ["var(--font-jarkata)", ...fontFamily.sans],
      },
      boxShadow: {
        navigation: "0px 0px 8px rgba(223, 223, 223, 0.25)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
