/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#070A14',
        surface: '#0D1526',
        surface2: '#111D35',
        line: '#1E2D4A',
        muted: '#7A8499',
        paper: '#F5F0E8',
        papersurface: '#EDE7D5',
        paperline: '#D5C9B0',
        inktext: '#1A1917',
        gold: '#E3A83B',
        'gold-light': '#F0C05A',
        cyan: '#4FD1C5',
        'cyan-dark': '#38B2AC',
        purple: '#8B5CF6',
        emerald: '#10B981',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(79, 209, 197, 0.5)' },
          '50%': { textShadow: '0 0 25px rgba(79, 209, 197, 0.9)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'slide-up': 'slide-up 0.6s ease forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        glow: 'glow 2s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #070A14 0%, #0D1526 50%, #111D35 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E3A83B, #F0C05A)',
        'cyan-gradient': 'linear-gradient(135deg, #4FD1C5, #38B2AC)',
        'card-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
      },
    },
  },
  plugins: [],
}
