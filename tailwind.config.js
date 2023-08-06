/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      width: {
        108: "34rem",
        118: "44rem",
        138: "64rem",
        // Add more custom width values as needed
      },

      height: {
        118: "44rem",
        108: "34rem",
      },

      fontFamily: {
        info: ["Playfair Display", "serif"],
        custom: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
