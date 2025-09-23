import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['DM Sans', 'system-ui', 'sans-serif'],
        'body': ['DM Sans', 'system-ui', 'sans-serif'],
        'mono': ['DM Sans', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      colors: {
        // CogNodes Brand Colors - Primary Palette
        'cn-navy': {
          900: '#0d133b',
        },
        'cn-slate': {
          600: '#395e79',
        },
        'cn-blue': {
          400: '#63b2fa',
        },
        'cn-gray': {
          50: '#f5f5f5',
          300: '#dbdbdb',
        },
        'cn-charcoal': {
          900: '#222222',
        },
        'cn-pink': {
          400: '#ff91d4',
        },
        'cn-lavender': {
          400: '#a89bff',
        },
        'cn-steel': {
          500: '#8098af',
        },
        'cn-dark': {
          700: '#424242',
        },
        // Dark theme colors
        'dark': {
          'black': '#000000',
          'gray': '#111111',
          'medium': '#222222',
          'light': '#333333',
        },
        // Glass Effect Colors for dark theme
        'glass': {
          'white': 'rgba(255, 255, 255, 0.1)',
          'white-20': 'rgba(255, 255, 255, 0.2)',
          'white-30': 'rgba(255, 255, 255, 0.3)',
          'black': 'rgba(0, 0, 0, 0.1)',
          'black-20': 'rgba(0, 0, 0, 0.2)',
          'black-30': 'rgba(0, 0, 0, 0.3)',
          'grey': 'rgba(128, 128, 128, 0.1)',
          'grey-20': 'rgba(128, 128, 128, 0.2)',
          'grey-30': 'rgba(128, 128, 128, 0.3)',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
        "gradient-fog": "linear-gradient(135deg, rgba(128, 128, 128, 0.1), rgba(128, 128, 128, 0.05))",
        "gradient-dark": "linear-gradient(135deg, #000000, #111111)",
        "gradient-riggys": "linear-gradient(135deg, #8DD305, #7bb802)",
        "gradient-jp": "linear-gradient(135deg, #2364ED, #1d4ed8)",
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
    },
  },
  plugins: [],
};

export default config;
