/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Ysabeau SC", "sans-serif"],
      },
      backgroundColor: { "neu-button": "linear-gradient(145deg, #9eaec5, #636d7b)" },
      borderRadius: { "neu-button": "72px" },
      boxShadow: { "neu-button": "13px 13px 26px #727e8e,-13px -13px 26px #a6b7ce" },
    },

    plugins: ["tailwindcss-neumorphism"],
  },
};
