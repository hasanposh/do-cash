/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#db4a2b",
        "custom-gray": "#e3e2dd",
      },
    },
  },
  plugins: [require("daisyui")],
};
