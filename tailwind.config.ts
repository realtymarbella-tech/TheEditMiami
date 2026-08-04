import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#121210",
          900: "#1C1C1A",
          700: "#3D3C38",
          500: "#706E69",
          400: "#8A8278",
          200: "#D0C9C0",
          100: "#E8E3DC",
        },
        cream: "#FDFCFB",
        ocean: { DEFAULT: "#0C2430", dk: "#071A23" },
        aqua: { DEFAULT: "#2AB5AE", dk: "#1F9993", lt: "#7FD8D0", 100: "#D8F2EF" },
        flamingo: { DEFAULT: "#E96A8D", dk: "#C94C72", 100: "#FBE3EA" },
        sunset: { DEFAULT: "#F5A95C", dk: "#D98B3F", lt: "#FCE8D2" },
        rose: { DEFAULT: "#E56A87", lt: "#FF8DA6", dk: "#C94C72" },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "sans-serif"],
      },
      transitionTimingFunction: {
        "brand-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
