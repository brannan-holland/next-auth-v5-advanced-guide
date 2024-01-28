import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'alabaster': {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEFEFE',
          300: '#FDFDFD',
          400: '#FCFCFC',
          500: '#FBFBFB',
          600: '#E2E2E2',
          700: '#979797',
          800: '#717171',
          900: '#4B4B4B',
          },
          
          'chambray': {
          50: '#F4F6F8',
          100: '#E8EDF2',
          200: '#C6D1DE',
          300: '#A3B5CB',
          400: '#5E7EA3',
          500: '#19467C',
          600: '#173F70',
          700: '#0F2A4A',
          800: '#0B2038',
          900: '#081525',
          },
          
          'sky-blue': {
          50: '#F9FDFE',
          100: '#F3FAFC',
          200: '#E1F4F8',
          300: '#CEEDF3',
          400: '#AADFEA',
          500: '#85D1E1',
          600: '#78BCCB',
          700: '#507D87',
          800: '#3C5E65',
          900: '#283F44',
          },
          
          'waterloo': {
          50: '#F8F8FA',
          100: '#F2F2F4',
          200: '#DEDEE4',
          300: '#CBCBD3',
          400: '#A3A3B2',
          500: '#7C7C91',
          600: '#707083',
          700: '#4A4A57',
          800: '#383841',
          900: '#25252C',
          },

        
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config