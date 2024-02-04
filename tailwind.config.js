/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
  "./src/**/*.{html,ts}"
],
  theme: {
    extend: {
      colors:{
        'transparent':'transparent',
        'primary':'#32CBFF',
        'secondary':'0015Eo',
        'tertiary':'#89A1EF',
        'quaternary':'#81FAE1',
        'quinary':'#56CBF9',
        'hoveColor':'#6a6d78',
      },
      backgroundColor:{
        'primary':'#32CBFF',
        'secondary':'00A5E0',
        'tertiary':'#89A1EF',
        'quaternary':'#81FAE1',
        'quinary':'#56CBF9',
      },
      width:{
        '100':'500px',
        '108':'900px',
        '98':'400px',
        '97':'28rem'
      },
      height:{
        '100':'500px',
        '98':'400px',
        '97':'28rem'
      },
      fontFamily: {
      jost: ['Jost', 'sans-serif'],
      Montserrat: ['Montserrat', 'serif'],
    }
    },
  },
  plugins: [],
}

