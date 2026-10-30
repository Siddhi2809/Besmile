import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#10B9C3",
          "primary-dark": "#079BA5",
          purple: "#7A43D8",
          "purple-dark": "#6431B8",
          orange: "#FFAA18",
          "orange-hover": "#E89608",
          green: "#63C32D",
          navy: "#102A5C",
          "light-cyan": "#F0FCFD",
          "light-purple": "#F7F3FF",
          "light-orange": "#FFF8E9",
          "light-green": "#F3FBF0",
        },
        primary: {
          DEFAULT: "#10B9C3",
          dark: "#079BA5",
          light: "#F0FCFD",
        },
        purple: {
          brand: "#7A43D8",
          dark: "#6431B8",
          light: "#F7F3FF",
        },
        orange: {
          brand: "#FFAA18",
          hover: "#E89608",
          light: "#FFF8E9",
        },
        navy: {
          brand: "#102A5C",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
