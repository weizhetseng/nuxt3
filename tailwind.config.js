/** @type {import('tailwindcss').Config} */
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
        title: ['Tanker-Regular', 'sans-serif']
      },
      colors: {
        'main-red': '#BA181B',
        'main-gray': '#D3D3D3',
        'main-gray-2': '#878787',
        'main-gray-3': '#F2F2F2',
        'main-gray-4': '#A1A1A1',
        line: '#00B900',
        wechat: '#7BB32E',
        twitter: '#00AFF0'
      },
      fontSize: {
        7: '28px',
        8: '32px'
      },
      spacing: {
        15: '60px',
        25: '100px',
        35: '140px',
        40: '160px',
        50: '200px',
        '12%': '12%',
        '15%': '15%',
        '18%': '18%'
      },
      boxShadow: {
        main: '0px 4px 4px 0px rgba(0, 0, 0, 0.05)',
        second: '2px 2px 12px 0px rgba(0, 0, 0, 0.16)',
        third: '2px 8px 20px 0px rgba(0, 0, 0, 0.26)'
      },
      backgroundImage: {
        'select': "url('/assets/img/other/select.svg')"
      },
      backgroundPosition: {
        'right-4': 'right 16px center'
      },
    }
  },
  plugins: []
}
