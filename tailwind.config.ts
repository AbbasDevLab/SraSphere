import type { Config } from "tailwindcss";

const cyanShades = {
  50: "#F0FBFE",
  100: "#E0F5FC",
  200: "#B3E8F5",
  300: "#73D5E9",
  400: "#3FBFDD",
  500: "#1CA3C6",
  600: "#1583A2",
  700: "#136A85",
  800: "#14536A",
  900: "#123F52",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#101827",
          50: "#F2F5F9",
          100: "#E2E8F2",
          200: "#C4CFDF",
          300: "#93A5BF",
          400: "#5B6E8C",
          500: "#38496A",
          600: "#253554",
          700: "#1D2B42",
          800: "#16213A",
          900: "#101827",
          950: "#0A0F1B",
        },
        slateBlue: "#1D2B42",
        cyan: cyanShades,
        cloud: "#F2F5F9",
        charcoal: "#252D3A",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(115,213,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(115,213,233,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
