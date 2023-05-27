/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      extend: {
        spacing: {
          px: "1px",
          0: "0",
          1: "0.25rem",
          2: "0.5rem",
          3: "0.75rem",
          4: "1rem",
          5: "1.25rem",
          6: "1.5rem",
          8: "2rem",
          10: "2.5rem",
          12: "3rem",
          16: "4rem",
          20: "5rem",
          24: "6rem",
          32: "8rem",
          40: "10rem",
          48: "12rem",
          56: "14rem",
          64: "16rem",
        },
        borderRadius: {
          none: "0",
          sm: "0.125rem",
          DEFAULT: "0.25rem",
          md: "0.375rem",
          lg: "0.5rem",
          full: "9999px",
        },
        borderWidth: {
          DEFAULT: "1px",
          0: "0",
          2: "2px",
          4: "4px",
          8: "8px",
        },
        fontFamily: {
          sans: ["Helvetica", "Arial", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
