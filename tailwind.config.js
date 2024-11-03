/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "rgb(231, 254, 41)",
      },
      fontFamily: {
        Inter: "Inter",
        Sora: "Sora",
      },
    },
  },
  plugins: [require("daisyui")],
};
