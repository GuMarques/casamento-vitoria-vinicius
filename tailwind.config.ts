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
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
      fontFamily: {
        luxurious: ["var(--luxurious)"],
        bacasime: ["var(--bacasime)"],
      },
      screens: {
        xs: "325px",
        sm: "390px",
        md: "540px",
        lg: "810px",
      },
    },
  },
  plugins: [],
};
export default config;
