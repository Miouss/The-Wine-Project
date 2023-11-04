import type { Config } from 'tailwindcss'
import { black, tertiary } from "./src/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/assets/footer/bg.png')",
      },
      backgroundColor: {
        black,
        tertiary,
      },
      textColor: {
        black,
        tertiary,
      },
      gradientColorStops: {
        black,
        tertiary,
      },
    },
    plugins: [],
  }
};

export default config;
