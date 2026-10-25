/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0b',
        accent: '#151517',
        gold: { DEFAULT: '#d4af37', light: '#f1d592' },
        muted: '#a0a0a0',
        ember: '#e63946', // red accent
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f1d592 50%, #d4af37 100%)',
      },
      boxShadow: {
        gold: '0 0 15px rgba(212,175,55,0.2)',
        'gold-lg': '0 10px 20px rgba(212,175,55,0.4)',
        ember: '0 0 12px rgba(230,57,70,0.35)',
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        navFade: { from: { opacity: 0, transform: 'translateX(50px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
        'reveal': 'fadeUp 1s ease backwards',
        'nav-fade': 'navFade 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
