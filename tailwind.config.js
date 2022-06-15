module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     fontSize: {
       'ex-small2': '11px',
       'ex-small': '13px',
       'sm': '20px',
       'md': '24px',
       'lg': '32px',
       'xl': '40px',
       '2xl': '60px',
     },

     extend: {
      colors: {
        'blu': '#3FAEFF',
        'pink': '#FF2E9F',
        'white': '#FFFDFD',
      },

      fontFamily: {
        sans: ['epilogue', 'sans-serif'],
      },

      width: {
        'a4w': '595px'
      },

      height: {
        'a4h': '842px',
        'div-h': '536px'
      },
    },
  },
  plugins: [],
}
