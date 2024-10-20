/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#000000",
        baseColor: "#ffffff",
      },
      backgroundAttachment: {
        fixed: "fixed",
      },
    },
  },
  plugins: [],
};
