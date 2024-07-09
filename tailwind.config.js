/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        animatetop: {
          '0%': { top: '-300px', opacity: '0' },
          '100%': { top: '0', opacity: '0.5' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '50%': { opacity: '0.5' },
        },
        animate: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
            opacity: '0.5',
            borderRadius: '0',
          },
          '100%': {
            transform: 'translateY(-1000px) rotate(720deg)',
            opacity: '0',
            borderRadius: '40%',
          },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' },
        },
        wavy: {
          '0%, 100%': { backgroundPosition: '0 0' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        gradientX: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        gradientY: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
        gradientXY: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        moving: {
          '0%': { left: '-20px' },
          '100%': { left: 'calc(100% - 20px)' },
        },
      },
      animation: {
        animatetop: 'animatetop 0.5s ease-out',
        zoomIn: 'zoomIn 0.5s ease-out',
        animate: 'animate 4s linear infinite',
        rotate: 'rotate 10s linear infinite',
        'wavy-bg': 'wavy 5s infinite linear',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
        moving: 'moving 4s linear infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#57033F',
          light: '#EAD5E6',
          lighter: '#F2BEFC',
          lightest: '#F3E0EC',
        },
        highlight: {
          DEFAULT: '#EE85B5',
        },
        customPink: '#ffc0eb', // Add this line
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
