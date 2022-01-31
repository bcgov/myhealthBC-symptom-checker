module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['BCSans'],
    },
    extend: {
      colors: {
        bcBluePrimary: '#003366',
        bcYellowPrimary: '#FCBA19',
        bcBlack: '#313132',
        bcGray: '#606060',
        bcLightGray: '#F2F2F2',
        bcBlueLink: '#1A5A96',
        bcBlueNav: '#38598A',
        bcRedError: '#D8292F',
        bcGreenSuccess: '#2E8540',
        bcGreenLight: '#F7FCF8',
        bcYellowWarning: '#F5A623',
        bcBlueAccent: '#38598A',
        bcBlueIndicator: '#0053A4',
        bcLightBackground: '#E5E5E5',
        bcLightBlueBackground: '#D9EAF7',
        bcLightBoxBackground: '#FAFAFA',
        bcOrange: '#F6A622',
        bcDisabled: '#CFCFCF',
        lightRedBackground: '#FCF7F9',
        lightYellowBackground: '#FCFAF7',
        lightBlueBackground: '#F7F9FC',
      },
      fontSize: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      ringOffsetWidth: {
        10: '10px',
      },
      boxShadow: {
        '2xl': '0 4px 16px 0 rgba(35,64,117,0.3)',
      },
      minWidth: {
        5: '1.25rem',
      },
      maxWidth: {
        main: '996px',
      },
      width: {
        layout: '1140px',
        button: '184px',
        content: '596px',
      },
      height: {
        button: '54px',
      },
      letterSpacing: {
        widest: '.3em',
        wider: '.1em',
      },
      borderWidth: {
        10: '10px',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
