/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      main: "rgb(var(--color-main) / <alpha-value>)",
      text: "rgb(var(--color-text) / <alpha-value>)",
      dark: "rgb(var(--color-dark) / <alpha-value>)",
      gray: "rgb(var(--color-gray) / <alpha-value>)",
      bg: "rgb(var(--color-bg) / <alpha-value>)",
      lighter: "rgb(var(--color-lighter) / <alpha-value>)",
      white: "rgb(var(--color-white) / <alpha-value>)",
      border: "rgb(var(--color-border) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
