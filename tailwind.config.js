module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: '#01937C',
        primary: '#f26419',
        // primary: '#243f93',
        // primary: '#b11f24',
        // secondary: '#f3896f',
        // secondary: '#383E56',
        // secondary: '#00b4b1',
        secondary: 'black',
        copy: 'black',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'], // Fira Sans,Montserrat, Source Sans Pro
      // sans: ['Rubik', 'sans-serif'],
      // sans: ['Open Sans', 'sans-serif'],
      serif: ['Zilla Slab', 'serif'],
      // serif: ['Roboto Slab', 'serif'],
    },
  },
  variants: {
    extend: {
      borderWidth: ['last', 'hover'],
      scale: ['hover'],
    },
  },
  plugins: [],
};
