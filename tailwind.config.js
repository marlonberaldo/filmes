/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "3xl":"2000px",
      },
      backgroundImage: {
        'hero-pattern': "url(/bg-texture.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
