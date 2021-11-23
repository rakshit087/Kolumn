module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        merriweather: ['Merriweather'],
      },
      colors: {
        bkgrnd: '#FEFBF3',
        frgrnd: '#79B4B7',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
