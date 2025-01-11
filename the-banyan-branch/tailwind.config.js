/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
  	extend: {
  		colors: {
  			primary: 'var(--primary-color)',
  			secondary: 'var(--secondary-color)',
  			tertiary: 'var(--tertiary-color)',
  			info: 'var(--info-color)',
  			warning: 'var(--warning-color)',
  			error: 'var(--error-color)',
  			textBase: 'var(--text-base-color)',
  			success: 'var(--success-color)',
  			white: 'var(--white-color)'
  		},
  		fontFamily: {
  			body: [
  				'var(--theme-font)',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
