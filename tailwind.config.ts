import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Marca (constantes en ambos modos)
        ink: "#2B1C44",
        violet: { DEFAULT: "#7A4FC0", soft: "#AFA9EC", deep: "#3A2566" },
        rose: { DEFAULT: "#C8447F", dark: "#A8336A", 100: "#F7D9E6", 50: "#FBF2F7" },
        magenta: { DEFAULT: "#A8336A", deep: "#8E2FA8" },
        lila: "#F2ECFA",
        cream: "#FBF2F7",
        // Blanco semántico (secciones oscuras, constante)
        ondark: "#FFFFFF",
        overlay: "#FFFFFF",
        // Semánticos que cambian con el tema (light/dark) vía variables CSS
        page: "rgb(var(--c-page) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        surface2: "rgb(var(--c-surface2) / <alpha-value>)",
        accentSoft: "rgb(var(--c-accent-soft) / <alpha-value>)",
        body: "rgb(var(--c-body) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        link: "rgb(var(--c-link) / <alpha-value>)",
      },
      fontFamily: {
        // Space Grotesk = tipografía de marca, inyectada como variable por next/font
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      borderRadius: { xl2: "1.25rem" },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(0) translateX(0) scale(0.6)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.8" },
          "100%": { transform: "translateY(-120vh) translateX(20px) scale(1)", opacity: "0" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0) rotate(-0.4deg)" },
          "50%": { transform: "translateY(-14px) rotate(0.4deg)" },
        },
        shimmer: {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        rise: "rise linear infinite",
        floaty: "floaty 7s ease-in-out infinite",
        shimmer: "shimmer 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
