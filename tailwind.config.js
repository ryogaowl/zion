/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "2px": "2px",
        "650px": "650px",
      },
      width: {
        works: "32%",
      },
      textColor: {
        detail: "#0070F3",
      },
      backgroundColor: {
        under: "#242424",
        button: "#FEDB34",
      },
    },
  },
  plugins: [],
};
