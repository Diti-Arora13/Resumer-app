module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     fontSize: {
       'sm': '20px',
       'md': '24px',
       'lg': '32px',
       'xl': '40px',
       '2xl': '60px',
     },
    extend: {
      colors: {
        'blue': '#3FAEFF',
        'pink': '#FF2E9F',
        'white': '#FFFDFD',
      },
      fontFamily: {
        sans: ['epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
