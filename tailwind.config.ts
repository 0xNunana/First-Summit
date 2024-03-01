import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
     
        "fade-in": {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        "fade-left": {
          "0%": { transform: "translateX(30%)", opacity: "0%" },
          "100%": { transform: "translateX(0%)", opacity: "100%" },
         
        },
      },
      

      animation: {
       
        fadeIn: "fade-in 2s ease-in-out forwards",
        fadeL: "fade-left 1s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
