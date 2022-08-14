module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '760px',
      lg: '1366px',
      xl: '1920px',
    },
    colors: {
      primary: {
        100: '#F2F8FA',       
        200: '#84AECD',
        300: '#5798C8',
        DEFAULT:'#248FDE',
      },
      Active: '#44D3A7',
      Pending: '#FFBA1F',
      Cancelled: '#FE6A93',
      gray: {
        100: ' rgba(242, 248, 250, 0.7)',
        300: 'rgba(85, 118, 139, 0.7)',
        DEFAULT: '#55768B',   
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
