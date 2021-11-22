module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      bkgrnd: '#FEFBF3',
      frgrnd: '#79B4B7',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
