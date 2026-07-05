/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./app/components/**/*.{vue,js,ts}",
    "./app/pages/**/*.vue",
    "./app/app.vue",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#9D4EDD",
        secondary: "#7B2CBF",
        dark: "#050505",
        card: "#111111",
      },

      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        glow: "0 0 30px rgba(157,78,221,.25)",
      },
    },
  },

  plugins: [],
};
