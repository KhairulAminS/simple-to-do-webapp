module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        animation: {
          slideIn: 'slide-in 0.7s cubic-bezier(0.33, 0.07, 0, 1.04)',
          leave: 'leave 150ms ease-in forwards',
        },
        keyframes: {
          leave: {
            '0%': { transform: 'scale(1)', opacity: 1 },
            '100%': { transform: 'scale(0.9)', opacity: 0 },
          },
          'slide-in': {
            '0%': { transform: 'translateY(-150%)' },
            '100%': { transform: 'translateY(0)' },
          }
        }
      },
    },
    plugins: [
    ]
  };