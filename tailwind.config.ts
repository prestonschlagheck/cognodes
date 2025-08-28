import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
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

        // Brand-specific colors from slideshow
        'riggys': {
          'green': '#8cd303',      // Exact Riggy's green
          'blue': '#061a32',       // Exact Riggy's blue
        },
        'jp': {
          'blue': '#2563ec',       // JP Blue (updated)
        },
        // DJH Custom Colors
        'djh': {
          'primary': '#303134',    // Main dark gray
          'secondary': '#222222',  // Darker gray
          'tertiary': '#333333',   // Medium gray
          'accent': '#6B7280',     // Light gray
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
        "gradient-riggys": "linear-gradient(135deg, #8cd303, #7bb802)",
        "gradient-jp": "linear-gradient(135deg, #2563ec, #1d4ed8)",
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
