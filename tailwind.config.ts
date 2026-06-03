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
        brand: {
          red: "#E8141E",
          "red-soft": "#FFF0F0",
          "red-mid": "#FFCFCF",
        },
        neutral: {
          dark: "#111111",
          gray: "#4B5563",
          light: "#F9FAFB",
        },
        status: {
          taken: "#10B981",
          "taken-bg": "#ECFDF5",
          missed: "#E8141E",
          "missed-bg": "#FFF1F0",
          pending: "#F59E0B",
          "pending-bg": "#FFFBEB",
        },
      },
      fontFamily: {
        head: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,.08)",
        "card-red": "0 2px 16px rgba(232,20,30,.10)",
        "btn-red": "0 8px 24px rgba(232,20,30,.35)",
        notif: "0 8px 32px rgba(0,0,0,.15)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-delayed": "float 4s ease-in-out infinite 2s",
        "notif-pop": "notifPop 4s ease-in-out infinite 1s",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        notifPop: {
          "0%, 100%": { transform: "translateX(0) scale(1)" },
          "50%": { transform: "translateX(-6px) scale(1.02)" },
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(150deg, #fff 60%, #FFF5F5 100%)",
        "about-gradient":
          "linear-gradient(150deg, #FFF8F8 0%, #fff 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
