module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/*.tsx',
      './src/**/*.tsx',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '8': '80px',
      },
      colors: {
        gray: {
          '0': '#8E8E93',
          '50': 'rgba(255, 255, 255, 0.1)',
          '100': 'rgba(255, 255, 255, 0.2)',
          '150': 'rgba(255, 255, 255, 0.4)',
        },
        yellow: {
          '0': '#FF9F0A',
        },
        green: {
          '0': '#32D74B',
        },
        blue: {
          '0': '#131631',
          '50': 'rgba(41, 46, 86, 0.3)',
          '100': '#1561AC',
        }
      },
      maxWidth: {
        '25': '25px',
        '32': '32px',
        '35': '35px',
        '50': '50px',
        '100': '100px',
        '116': '116px',
        '200': '200px',
        '120': '120px',
        '162': '162px',
        '194': '194px',
        '304': '304px',
        '310': '310px',
        '375': '375px',
        '583': '583px',
        '600': '600px',
        '660': '660px',
        '894': '894px',
        '1360': '1360px',
      },
      width: {
        '80': '80px',
        '100': '100px',
        '116': '116px',
      },
      height: {
        '80': '80px',
        '100': '100px',
        '116': '116px',
        '310': '310px',
        '330': '330px',
        '582': '582px',
        '100vw': '100vw',
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '30': '30px',
        '34': '34px',
        '48': '48px',
        '52': '52px',
      },
      padding: {
        '3/100': '3%',
        '30vw': '30vw',
        '35vw': '35vw',
      },
      margin: {
        '4vw': '4vw',
        '8vw': '8vw',
        '9.5vw': '9.5vw',
        '31vw': '31vw',
        
      },
      screens: {
        'screen1360': '1360px',
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
