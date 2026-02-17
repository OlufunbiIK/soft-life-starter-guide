import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softBeige: "#f5f1ec",
        softBrown: "#5a4d3d",
        softGold: "#d4a574",
        softTan: "#7a6f5d",
        softCream: "#e8dfd4",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
