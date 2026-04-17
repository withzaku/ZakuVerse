import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans-zv)", "Montserrat", "Segoe UI", "sans-serif"],
        mono: ["var(--font-sans-zv)", "Montserrat", "Segoe UI", "sans-serif"],
        heading: ["var(--font-sans-zv)", "Montserrat", "Segoe UI", "sans-serif"],
      },
      colors: {
        primary: "#33DD66",
        secondary: "#173623",
        background: "#000000",
        card: "#07110A",
        muted: "#0D1A12",
        "muted-foreground": "#9AA79F",
      },
    },
  },
  plugins: [],
};

export default config;
