/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0A0A',
          900: '#0F0F10',
          850: '#141415',
          800: '#1A1A1B',
          700: '#262627',
          600: '#3A3A3B',
          500: '#525253',
          400: '#7A7A7C',
          300: '#A8A8AA',
          200: '#D0D0D2',
          100: '#EAEAEA',
          50: '#F5F5F5',
        },
        ember: {
          DEFAULT: '#D97742',
          light: '#E89465',
          dark: '#C2612F',
          glow: 'rgba(217, 119, 66, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        label: '0.14em',
        wider: '0.18em',
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.9' }],
        '11xl': ['13rem', { lineHeight: '0.85' }],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
