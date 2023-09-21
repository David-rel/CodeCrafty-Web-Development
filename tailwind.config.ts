import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        merriweather: ["Merriweather", "sans-serif"],
      },
      animation: {
        slideInFromBottom: "slideInFromBottom 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
