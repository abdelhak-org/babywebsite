
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#7071E8',
      'purple': '#C683D7',
      'pink': '#ED9ED6',
      'orange': '#ff7849',
      'green': '#8DDFCB',
      'yellow': '#ffc82c',
      'gray-dark': '#776B5D',
      'gray': '#8492a6',
      'gray-md' :'#EBE3D5',
      'gray-light': '#F3EEEA',
      'white'      : '#fff'
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif' ],
      inter: ['Inter', 'sans-serif'],
      script : [ 'Dancing Script', 'cursive' ]
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
