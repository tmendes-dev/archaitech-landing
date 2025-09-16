/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class", // 👈 enable class-based dark mode
  theme: {
    extend: {
      boxShadow: {
        soft: "0 6px 30px -12px rgba(0,0,0,0.25)",
      }
    },
  },
  plugins: [],
};
