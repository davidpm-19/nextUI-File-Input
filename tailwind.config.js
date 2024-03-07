const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            bg_start: "#2B2B2B",
            bg_end: "#1C1C1C",
            foreground: "#E3E3E3",
            interactive_bg: "#2A2B2C",
            clip_bg_start: "#00C6FF",
            clip_bg_end: "#0072FF",
          },
        },
        light: {
          colors: {
            bg_start: "#BBBBBB",
            bg_end: "#EAEAEA",
            foreground: "#1C1C1C",
            interactive_bg: "#E9E9E9",
            clip_bg_start: "#4e54c8",
            clip_bg_end: "#8f94fb",
          },
        },
      },
    }),
  ],
};