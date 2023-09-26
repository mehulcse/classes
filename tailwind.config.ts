import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5174",
        background: "#f8f9fd",
        avatarBorder: "#FFEAEE",
        grayish: "#919498",
      },
      fontFamily: {
        jost: ["var(--font-asap)", "Asap", "sans-serif"],
        roboto: ["var(--font-roboto)", "Roboto", "sans-serif"],
        atf: ["alternate-gothic-compressed", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
