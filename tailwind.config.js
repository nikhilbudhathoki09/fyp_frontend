/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#33216f",
        "white-bg": "#f0f0f0",
        button: "#7950f2",
        tertiary: "#433681",
        "text-color": "#000",
        "text-color-secondary": "#66697E",
      },
    },
  },
  plugins: [],
};
