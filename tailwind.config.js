module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#01937C',
        // primary: '#243f93',
        // primary: '#b11f24',
        // secondary: '#f3896f',
        // secondary: '#383E56',
        // secondary: '#00b4b1',
        secondary: '#383E56',
        copy: 'white',
      },
      zIndex: {
        '-10': '-10',
      },
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      // serif: ['Roboto Slab', 'serif'],
      serif: ['Zilla Slab', 'serif'],
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
