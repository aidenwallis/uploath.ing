/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(0 83% 50%)',  
        primaryMuted: 'hsl(0 70% 40%)',
        gray: {
          900: 'rgb(24 24 27)',
        },
      },
    },
  },
  plugins: [],
}

