/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)", 
        dark: "rgb(var(--color-dark) / <alpha-value>)", 
        darker: "rgb(var(--color-darker) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        grayed: "rgb(var(--color-grayed) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
