/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
        screens: {
        'xxs': { raw: '(min-width: 315px) and (max-width: 380px)' }, 
        'xs': { raw: '(min-width: 381px) and (max-width: 424px)' },
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px #3b82f6' }, // Tailwind blue-500
          '50%': { boxShadow: '0 0 12px #3b82f6' },
        },
      },
      animation: {
        glow: 'glow 1s ease-in-out infinite',
      },
    },
  },
  plugins: [
    
  ],
}

