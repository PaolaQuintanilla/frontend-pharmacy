module.exports = {
  prefix: '',
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#ffffff',
      },
      gray: {
        DEFAULT: '#D0D2D7',
        icon: '#9e9e9e',
        disabled: '#999999',
        light: '#E0E5ED',
        subLight: '#f8f8f8'
      },
      red: {
        DEFAULT: '#BD4646',
        low: '#FF6B6B'
      },
      blue: {
        DEFAULT: '#52a3fb',
        link: '#007AFF',
        avatar: '#0863FF'
      },
      orange: {
        DEFAULT: '#ECA354'
      },
      black: {
        mineral: '#4D4D4E'
      },
      green: {
        low: '#A1E8AF'
      }
    },
    extend: { },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};