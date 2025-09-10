/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Biru lebih terang (blue-500)
        secondary: "#60a5fa", // Biru muda
        accent: "#bfdbfe", // Biru pastel
        bgDark: "#0f172a",
        bgLight: "#f1f5f9",
        textDark: "#ffffff",
        textLight: "#1e40af",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(to bottom right, #0f172a, #1e40af)",
      },
    },
  },
  plugins: [],
};
