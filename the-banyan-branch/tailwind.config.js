/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        info: "var(--info-color)",
        warning: "var(--warning-color)",
        error: "var(--error-color)",
        textBase: "var(--text-base-color)",
        success: "var(--success-color)",
        white: "var(--white-color)",
      },
      fontFamily: {
        body: ["var(--theme-font)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
