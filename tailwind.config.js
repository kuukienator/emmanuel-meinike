module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary: '#f26419',
        // primary: 'rgb(211, 118, 98)',
        // primary: 'rgb(36, 65, 63)',
        primary: 'var(--primary)',
        // highlight: 'white',
        highlight: 'rgb(238, 235, 232)',
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
