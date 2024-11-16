/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Default font
      },
      colors: {
        "blue-dianne": {
          50: "#f0fafb",
          100: "#d9f2f4",
          200: "#b7e4ea",
          300: "#85d0db",
          400: "#4cb2c4",
          500: "#3196a9",
          600: "#2b798f",
          700: "#296475",
          800: "#295361",
          900: "#264653",
          950: "#142d38",
        },
      },
    },
  },
  plugins: [],
};
