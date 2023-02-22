/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        viGreen:{
        light2: '#6dba3d',
        light1: '#6dba3d',
        DEFAULT: '#93c90f',
        dark1: '#93c90f',
        dark2: '#93c90f'
        },
        vi:{
          light: '#ff7ce5',
          DEFAULT: '#0080b9',
          dark: '#ff16d1'
        }
      },
      fontSize: {
        'xxl': ['10rem' , 'initial'],
        '2xxl': ['12rem' , 'initial'],
        '3xxl': ['14rem' , 'initial'],
        '4xxl': ['16rem' , 'initial'],
        '5xxl': ['18rem' , 'initial'],
        '6xxl': ['20rem' , 'initial']
      },
      fontFamily: {
        'Impact': 'Impact, Arial, sans-serif',
        'Montserrat': 'Montserrat, Arial, sans-serif',
        'Sans': 'Noto Sans SC, Arial, sans-serif',
        'OpenSans': 'Open Sans, Arial, sans-serif',
        'SevenSegment': 'Seven Segment, Arial, sans-serif'
      },
      backgroundImage: {
        'p02rBannr': "url('https://cdn.shopifycdn.net/s/files/1/0067/6950/8415/files/s1_bg.jpg?v=1676538193')",
        'mask': "url('https://cdn.shopifycdn.net/s/files/1/0067/6950/8415/files/s7_bg.png?v=1676513159')",
        's3bg': "url('https://cdn.shopify.com/s/files/1/0067/6950/8415/files/s3_bg.png?v=1676461660')",
        's2bgScreen': "url('https://cdn.shopify.com/s/files/1/0067/6950/8415/files/s2_bg.jpg?v=1676878728')"
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.3333333%',
        '1/4': '25%',
        '1/5': '20%',
        'default': '1400px',
        '3xl':'1600px'
      },
      inset: {
        '1/2': '50%',
        '1/3': '33.3333333%',
        '1/4': '25%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '1/6': '16.666666%',
        '1/8': '12.5%',
        '-1/2': '-50%',
        '-1/3': '-33.3333333%',
        '-1/4': '-25%',
        '-1/5': '-20%',
        '-2/5': '-40%',
        '-1/6': '-16.666666%',
        '-1/8': '-12.5%',
       },
       spacing: {
        '1/2': '50%',
        '1/3': '33.3333333%',
        '1/4': '25%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '1/6': '16.666666%',
        '1/8': '12.5%',
        '-1/2': '-50%',
        '-1/3': '-33.3333333%',
        '-1/4': '-25%',
        '-1/5': '-20%',
        '-2/5': '-40%',
        '-1/6': '-16.666666%',
        '-1/8': '-12.5%',
      },
       boxShadow: {
        'ripple':'#a6c6c4 0px 0px 30px 10px;'
      }
    },
  },
  plugins: [],
}
