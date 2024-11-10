/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        specialBlue: "#2B95ED",
        topBlue: "#CEFEFF",
        textColor: "#4C5856",
        lightestBlue: "#C5E5FF33",
      },
    },
  },
  plugins: [],
};
