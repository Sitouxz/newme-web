/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        navcard: "url('assets/img/navcard.png')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Manrope", "sans-serif"],
      },
      colors: {
        slidebg: "#26153B",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
