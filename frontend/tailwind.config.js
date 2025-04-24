
module.exports = {
  content: [
    "src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#FFFFFF', // ホワイト
        primary: {
          300: '#FFCC21', // プライマリー / 300
          400: '#FF963C', // プライマリー / 400
          500: '#EA6C00', // プライマリー / 500
        },
        secondary: {
          300: '#8FE9D0', // セカンダリー / 300
        },
        dark: {
          500: '#414141', // ブラック / 500
          600: '#2E2E2E', // ブラック / 600
        },
        gray: {
          400: '#777777', // グレー / 400
        },
        gradient: {
          'primary-300-400': 'linear-gradient(to right, #FFCC21, #FF963C)', // グラデーション
        },
      },
    },
  },
    plugins: [

  ],
}
