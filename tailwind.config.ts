import type { Config } from "tailwindcss";
import { black, tertiary, winePink, wineRed, wineWhite } from "./src/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      black,
      white: "#FFFFFF",
    },
    extend: {
      colors: {
        tertiary,
        "wine-white": wineWhite,
        "wine-pink": winePink,
        "wine-red": wineRed,
      },
      backgroundImage: {
        footer: "url('/assets/footer/bg.png')",
      },
      fontFamily: {
        cinzel: "var(--cinzel-font)",
      },
    },
    plugins: [],
  },
};

export default config;
