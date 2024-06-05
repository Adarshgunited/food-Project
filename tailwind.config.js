/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',  // Custom primary color
        secondary: '#F59E0B', // Custom secondary color
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-150px)' },
          '50%': { transform: 'translateX(150px)' },
          '100%': { transform: 'translateX(300px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [],
}

