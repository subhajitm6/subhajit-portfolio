/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Share Tech Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        dark: {
          50: '#e4e4e7',
          100: '#c9c9ce',
          200: '#93939d',
          300: '#5e5e6b',
          400: '#3a3a45',
          500: '#27272f',
          600: '#1e1e25',
          700: '#16161c',
          800: '#0e0e13',
          900: '#0a0a0f',
          950: '#050508',
        },
        accent: {
          DEFAULT: '#00f2ff', // Neon Cyan
          light: '#70f9ff',
          dark: '#00c8d4',
        },
        robotic: {
          green: '#39ff14', // Neon Green
          purple: '#bc13fe', // Neon Purple
          red: '#ff073a', // Neon Red
          silver: '#c0c0c0',
        },
        cyan: {
          DEFAULT: '#06b6d4',
          light: '#22d3ee',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #00f2ff 0%, #bc13fe 50%, #39ff14 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0,242,255,0.05) 0%, rgba(188,19,254,0.02) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(99,102,241,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(99,102,241,0.6)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
