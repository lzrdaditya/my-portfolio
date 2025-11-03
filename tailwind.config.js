/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#1c1c1e",
        silver: "#a1a1a1",
        accent: "#4f8cff",
      },
    },
  },
  plugins: [],
};
