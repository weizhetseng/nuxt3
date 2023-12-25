/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],
  theme: {
    screens: {
      '3xs': '375px',
      '2xs': '475px',
      xs: '576px',
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px'
    },
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      fontFamily: {
        title: ['Tanker-Regular', 'sans-serif'],
        subTitle: ['Teko', 'sans-serif']
      },
      colors: {
        'main-red': '#BA181B',
        'main-red-2': '#DA1515',
        'main-gray': '#D3D3D3',
        'main-gray-2': '#878787',
        'main-gray-3': '#F2F2F2',
        'main-gray-4': '#A1A1A1',
        'main-gray-5': '#BCBCBC',
        'main-gray-6': '#BABABA',
        'bg-white': 'rgba(255, 255, 255, 0.9)',
        line: '#00B900',
        wechat: '#7BB32E',
        twitter: '#00AFF0'
      },
      fontSize: {
        7: '28px',
        8: '32px',
        10: '40px',
        20: '80px'
      },
      spacing: {
        15: '60px',
        25: '100px',
        30: '120px',
        35: '140px',
        40: '160px',
        45: '180px',
        50: '200px',
        '12%': '12%',
        '15%': '15%',
        '18%': '18%',
        '45%': '45%'
      },
      boxShadow: {
        main: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
        second: '2px 2px 12px 0px rgba(0, 0, 0, 0.16)',
        third: '2px 8px 20px 0px rgba(0, 0, 0, 0.26)'
      },
      backgroundImage: {
        select: "url('/assets/img/other/select.svg')",
        home: "url('/assets/img/other/home.png')",
        about: "url('/assets/img/other/about02.jpg')"
      },
      backgroundPosition: {
        'right-4': 'right 16px center'
      },
      animation: {
        'fade-in': 'fade 2s linear infinite'
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        }
      },
      animationDelay: {
        main: '0.1s',
        second: '0.2s',
        third: '0.3s'
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animation-delay': (value) => ({
            animationDelay: value
          })
        },
        { values: theme('animationDelay') }
      )
    })
  ]
}
