module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        screens: {
          'md': '800px',
          '3xl': '2400px',
        },
        padding: {
          '2/3': '66.66667%',
          '1/3': '33.33334%',
          '5/6': '83.33334%'
        },
        gridTemplateRows: {
          'products': '50px minmax(0, 1fr)',
          'checkout': '150px repeat(6, minmax(0, 1fr))',
        },
        gridRow: {
          'span-7': 'span 7 / span 7',
        },

        animation: {
          enter: 'enter 200ms ease-out',
          slideIn: 'slide-in 0.7s cubic-bezier(0.33, 0.07, 0, 1.04)',
          slideLeft: 'slide-left 3.5s linear forwards',
          leave: 'leave 150ms ease-in forwards',
          progress: 'progress 4s linear',
          open: 'open 0.5s ease-in forward',
          'rotate-forward': 'rotate-forward 0.3s ease-out',
          'rotate-reverse': 'rotate-reverse 0.3s ease-out',
        },
        keyframes: {
          enter: {
            '0%': { transform: 'scale(0.9)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
          leave: {
            '0%': { transform: 'scale(1)', opacity: 1 },
            '100%': { transform: 'scale(0.9)', opacity: 0 },
          },
          'slide-in': {
            '0%': { transform: 'translateY(-150%)' },
            '100%': { transform: 'translateY(0)' },
          },
          'slide-left': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          open: {
            '0%': { transform: 'scaleY(0)' },
            '100%': { transform: 'scaleY(100%)' },
          },
          'rotate-forward': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(180deg)' },
          },
          'rotate-reverse': {
            '0%': { transform: 'rotate(180deg)' },
            '100%': { transform: 'rotate(0deg)' },
          },
        }
      },
    },
    plugins: [
    ]
  };