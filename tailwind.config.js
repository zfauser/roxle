module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        banklebg: '#1a1820',
        bankleborder: '#2f2a39',
        wrong: '#292A2D',
        keyboard: '#818384',
      },
      height: {
        dynamic: 'var(--real100vh)',
      },
    },
  },
  plugins: [],
}
