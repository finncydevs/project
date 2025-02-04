/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#e0f2fe",
        dark: "#e0f2fe",
        secondary: "#e0f2fe",
      },
      screens: {
        "2xl": "1320px",
      },
      fontSize: {
        "10xl": "50px",
      },
      gridTemplateColumns: {
        "70/30": "20% 28%",
      },
      scale: {
        175: "1.75",
        200: "2", // 200% size
        250: "2.5", // 250% size
        300: "3", // 250% size
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
