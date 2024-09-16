/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        btn: '#A998E2',
        btnHover: '#6040c9',
        bg: '#343444',
        boxBg: '#372865',
        org: '#f9b493',
        lightBlue: '#dafbf6',
        pink: '#f59ccf',
        lightOrg: '#fed49a',
        lightOrg2: '#f7b293',
      },
    },
  },
  plugins: [],
}
