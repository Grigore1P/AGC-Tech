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
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
      animation: {
        animatetop: 'animatetop 0.5s ease-out',
        zoomIn: 'zoomIn 0.5s ease-out',
        animate: 'animate 4s linear infinite',
        rotate: "rotate 10s linear infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
