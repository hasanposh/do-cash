/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'archivo-black': ['"Archivo Black"', 'sans-serif'],
        'fira-sans-condensed': ['"fira-sans-condensed"', 'sans-serif'],
      },
      colors: {
        "custom-orange": "#db4a2b",
        "custom-gray": "#e3e2dd",
      },
    },
  },
  plugins: [require("daisyui")],
};
