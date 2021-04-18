module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '30px': '30px',
        '40px': '40px',
        '50px': '50px',
        '60px': '60px',
        '70px': '70px',
      },
      padding: {
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '7px': '7px',
        '8px': '8px',
        '9px': '9px',
        '10px': '10px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}