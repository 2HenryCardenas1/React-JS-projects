/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "medium-small-screen": "380px",
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animated")
  ],
};
