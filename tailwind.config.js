module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue'],
    
    // 白名單
    options: {
      safelist: ['opacity-0', 'transition-opacity', 'duration-500'],
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#28a59d',
        mainLight: '#bcdadb',
        blue: '#475569',
        blueLight: '#93a2b7',
        gray: '#8e8e8e',
        inputBg: '#f3f3f3'
      },
      width: {
        '17': '5.25rem',
        'max-content': 'max-content'
      },
      height:{
        'max-content': 'max-content'
      },
      maxWidth:{
        '28': '7rem',
        '32': '8rem',
        '40': '10rem',
        '1200': '1200px',
        '1400': '1400px',
      },
      maxHeight:{
        '400': '400px',
        '151': '151px'
      },
      screens: {
        '1024': { 'max': '1024px' },
        '768': { 'max': '768px' },
        '640': { 'max': '640px' },
      },
      scale: {
        '102': '1.02',
        '105': '1.05',
      },
      lineHeight: {
        '1-75': '1.75'
      },
      boxShadow: {
        z1: '0px 4px 4px 1px rgb(0 0 0 / 0), 0px 2px 5px 2px rgb(0 0 0 / 10%)',
        z2: '5px 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23)',
        z3: '0 10px 20px rgba(0, 0, 0, .19), 0 6px 6px rgba(0, 0, 0, .23)',
        z4: '0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)',
        z5: '0 19px 38px rgba(0, 0, 0, .30), 0 15px 12px #08080838',
      },
      zIndex: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
      },
      spacing:{
        14: '3.9rem',
      },
      borderWidth:{
        '6': '6px',
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
