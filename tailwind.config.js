/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      lg: "1.5rem",
      xl: "2.25rem",
    },
    screens: {
      xs: { max: "475px" },
      sm: { max: "640px" },
      md: { max: "890px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      full: "100%",
      "50%": "50%",
      16: "4rem",
    },
  },
  plugins: [],
};
