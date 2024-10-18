/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-768": { max: "768px" },
        "max-472": { max: "472px" },
        "max-800": { max: "800px" },
        "max-1017": { max: "1017px" },
        "max-1024": { max: "1023px" },
        "max-2560": { max: "2560px" },
      },
      colors: {
        navy: {
          DEFAULT: "#1A2B4C",
        },
        electric: {
          DEFAULT: "#00A6ED",
        },
        gold: {
          DEFAULT: "#FFD700",
        },
        silver: {
          DEFAULT: "#C0C0C0",
        },
        teal: {
          DEFAULT: "#008080",
        },
        green: {
          bright: "#32CD32",
        },
        gray: {
          light: "#F5F5F5",
          dark: "#333333",
        },
        backgroundColor: {
          black: "#00000",
        },
        textColor: {
          white: "#ffffff",
        },
        slate: {
          slate: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
