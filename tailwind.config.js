/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        spidey: {
          red: '#E11D48',
          blue: '#1D4ED8',
          dark: '#020617',
          black: '#0A0A0B',
          glow: {
            red: '#FF1E56',
            blue: '#2E5BFF',
          }
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'spidey-gradient': 'linear-gradient(135deg, #020617 0%, #0A0A0B 100%)',
        'spidey-card': 'linear-gradient(135deg, rgba(225, 29, 72, 0.05) 0%, rgba(29, 78, 216, 0.05) 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite alternate',
        'web-swing': 'web-swing 4s ease-in-out infinite',
        'particle-float': 'particle-float 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { opacity: '0.4', filter: 'blur(8px)' },
          '100%': { opacity: '0.7', filter: 'blur(12px)' },
        },
        'web-swing': {
          '0%, 100%': { transform: 'rotate(-5deg) translateX(-2%)' },
          '50%': { transform: 'rotate(5deg) translateX(2%)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh) translateX(50px)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

