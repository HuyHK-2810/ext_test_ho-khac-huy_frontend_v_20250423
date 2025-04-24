
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
      fontSize: {
        '11': '11px',
        '15': '15px',
        '22': '22px',
        '25': '25px',
      },
      lineHeight: {
         '13': '13px',
        '18': '18px',
        '22': '22px',
        '23': '23px',
            '26': '26px',
            '27': '27px',
        '30': '30px',
      },
      letterSpacing: {
        '0.03': '0.03px',
        '0.06': '0.06px',
        '0.08': '0.08px',
      '0.11': '0.11px',
        '0.15': '0.15px',
      },
      fontFamily: {
        'hiragino': ['Hiragino Kaku Gothic Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans JP', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary-300-400': 'linear-gradient(to right, #FFCC21, #FF963C)',
      },
    },
  },
  plugins: [

  ],
}
