import type { Config } from "tailwindcss";

const config: Config = {
  // Apenas processa os arquivos do projeto, sem varredura desnecessária
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Design tokens da radiofit
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1", // primária
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        surface: {
          DEFAULT: "#0f0f1a", // fundo principal (escuro)
          card: "#16162a", // cards
          elevated: "#1e1e35", // elementos elevados
          border: "#2a2a45", // bordas
        },
      },
      fontFamily: {
        // Display: fonte pesada para nome da rádio e títulos
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        // Body: leitura confortável
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        // Mono: timestamps, dados técnicos
        mono: ["var(--font-mono)", "monospace"],
      },
      // Animações específicas do player
      keyframes: {
        "pulse-ring": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.08)", opacity: "0.7" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.8)" },
        },
        "slide-up": {
          from: { transform: "translateY(8px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 2s ease-in-out infinite",
        "wave-1": "wave 1.0s ease-in-out infinite",
        "wave-2": "wave 1.0s ease-in-out infinite 0.15s",
        "wave-3": "wave 1.0s ease-in-out infinite 0.30s",
        "wave-4": "wave 1.0s ease-in-out infinite 0.45s",
        "slide-up": "slide-up 0.3s ease-out",
        "fade-in": "fade-in 0.4s ease-out",
      },
      // Breakpoints customizados se necessário
      screens: {
        xs: "400px",
      },
    },
  },
  plugins: [],
};

export default config;
