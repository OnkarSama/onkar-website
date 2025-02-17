/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Kode Mono"', 'monospace'],
      'kode-mono': ['"Kode Mono"', 'monospace'],
    },
    extend: {
      colors: {
        primary: '#8B5CF6', // Soft purple
        secondary: '#A78BFA', // Light purple
        accent: '#7C3AED', // Darker purple accent
        text: '#D1D5DB', // Soft gray text color
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      prefix: "heroui",
      addCommonColors: true,
      defaultTheme: "dark",
      defaultExtendTheme: "dark",
      layout: {},
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#F3E8FF", // Soft lavender
            foreground: "#7C3AED", // Purple accents
            primary: "#8B5CF6",
            secondary: "#A78BFA",
            hover: "#E9D5FF", // Light purple hover effect
            text: "#374151", // Dark gray text color for light mode
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#000000", // Black background
            foreground: "#C4B5FD", // Soft purple foreground
            primary: {
              DEFAULT: "#8B5CF6", // Bright purple primary
              foreground: "#FFFFFF",
            },
            accent: "#7C3AED",
            hover: "#581C87", // Dark purple hover effect
            text: "#D1D5DB", // Soft gray text color for dark mode
          },
        },
      }
    })
  ],
};
