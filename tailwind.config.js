/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      dropShadow: {
        "assassin": "4px 2px 8px #334155",
        "map": "4px 2px 8px #334155"
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'fade-in': {
          "0%": { opacity: '0%' },
          "100%": { opacity: '100%' },
        },
        'fade-out': {
          "0%": { opacity: '100%' },
          "100%": { opacity: '0%' },
        },
        'buset' : {
          "0%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 0)" },
          "25%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 0)" },
          "50%": { clipPath: "polygon(0 0, 0 83%, 100% 100%, 0% 100%)", opacity: "50%", filter: "blur(2px)" },
          "100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", opacity: "100%", filter: "blur(0px)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'fade-in': "fade-in 1s ease-in-out forwards",
        'hello' : "buset 2s " ,
        'fade-out': "fade-out 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}