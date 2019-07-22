/**
 * Raken Settings
 * We are using variables in Sass and Tailwind Config.
 * And we only want a single source of truth for all of the variables.
 * All of the variables sits in `variables.json` and imported by `node-sass-json-importer` package.
 * @see variables.json
 */
let rakenVars = require('./src/styles/1-settings/variables.json5');

/**
 * For Default Configuration:
 * @see https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: { max: '767px' },
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },

    /**
     * @doc https://tailwindcss.com/docs/colors
     */
    colors: {
      transparent: 'transparent',
      white: rakenVars.white,
      black: rakenVars.black,
      'black-ash': rakenVars['black-ash'],
      'gray-dusty': rakenVars['gray-dusty'],
      'gray-iron': rakenVars['gray-iron'],
      'gray-porcelain': rakenVars['gray-porcelain'],
      'gray-sand': rakenVars['gray-sand'],
      'orange-raken': rakenVars['orange-raken'],
      'blue-cerulean': rakenVars['blue-cerulean'],
      'green-jade': rakenVars['green-jade'],
      'red-monza': rakenVars['red-monza']
    },

    /**
     * @docs https://tailwindcss.com/docs/theme/#spacing
     */
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.5rem',
      '2': '1.0rem',
      '3': '1.5rem',
      '4': '2.0rem',
      '5': '2.5rem',
      '6': '3.0rem',
      '8': '4.0rem',
      '10': '5.0rem',
      '12': '6.0rem',
      '16': '8.0rem',
      '20': '10.0rem',
      '24': '12.0rem',
      gutter: rakenVars['grid-gutter'].md
    },

    /**
     * @example .bg-{color}
     * @docs https://tailwindcss.com/docs/background-color
     */
    backgroundColor: theme => theme('colors'),

    /**
     * @example .bg-{side}
     * @docs https://tailwindcss.com/docs/background-position
     */
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      // left: 'left',
      // 'left-bottom': 'left bottom',
      // 'left-top': 'left top',
      // right: 'right',
      // 'right-bottom': 'right bottom',
      // 'right-top': 'right top',
      top: 'top'
    },

    /**
     * @example .bg-{size}
     * @docs https://tailwindcss.com/docs/background-size/
     */
    backgroundSize: {
      cover: 'cover',
      contain: 'contain'
    },

    /**
     * @example .border-{color}
     * @docs https://tailwindcss.com/docs/border-color/
     */
    borderColor: theme => ({
      'gray-porcelain': theme('colors.gray-porcelain')
    }),

    /**
     * @example .rounded-{size}
     * @docs https://tailwindcss.com/docs/border-radius/
     */
    borderRadius: {
      5: '5px',
      10: '10px',
      full: '9999px'
    },

    /**
     * @example .border-{t|r|b|l}-{size}
     * @docs https://tailwindcss.com/docs/border-width/
     */
    borderWidth: {
      '0': '0',
      '1': '1px'
    },

    /**
     * @example .shadow-{size}
     * @docs https://tailwindcss.com/docs/box-shadow/
     */
    boxShadow: {
      base: '0 0 15px 0 rgba(0, 0, 0, 0.25)',
      section: 'inset 0 50px 100px -20px rgba(0, 0, 0, 0.5)'
      // none: 'none'
    },

    /**
     * @example NA
     * @docs https://tailwindcss.com/docs/container/
     */
    container: {},

    /**
     * @example .cursor-{type}
     * @docs https://tailwindcss.com/docs/cursor/
     */
    cursor: {
      pointer: 'pointer'
    },

    /**
     * @example .fill-{type}
     * @docs https://tailwindcss.com/docs/fill/
     */
    fill: {
      current: 'currentColor'
    },

    /**
     * @example .flex-{value}
     * @docs https://tailwindcss.com/docs/flex/
     */
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },

    /**
     * @example .flex-grow-{value}
     * @docs https://tailwindcss.com/docs/flex-grow/
     */
    flexGrow: {
      '0': '0',
      default: '1'
    },

    /**
     * @example .flex-shrink-{value}
     * @docs https://tailwindcss.com/docs/flex-shrink/
     */
    flexShrink: {
      '0': '0',
      default: '1'
    },

    /**
     * @example .font-{family}
     * @docs https://tailwindcss.com/docs/font-family/
     */
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"'],
      mono: ['Menlo', 'Monaco']
    },

    /**
     * @example .text-{size}
     * @docs https://tailwindcss.com/docs/font-size/
     */
    fontSize: {
      '2rem': '2rem'
      // xs: '0.75rem',
      // sm: '0.875rem',
      // base: '1rem',
      // lg: '1.125rem',
      // xl: '1.25rem',
      // '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '4rem'
    },

    /**
     * @example .font-{weight}
     * @docs https://tailwindcss.com/docs/font-weight/
     */
    fontWeight: {
      hairline: '100',
      // thin: '200',
      // light: '300',
      normal: '400',
      // medium: '500',
      // semibold: '600',
      bold: '700',
      // extrabold: '800',
      black: '900'
    },

    /**
     * @example .h-{size}
     * @docs https://tailwindcss.com/docs/height/
     */
    height: theme => ({
      auto: 'auto',
      full: '100%',
      '80px': '80px',
      '100px': '100px',
      '150px': '150px',
      '70vh': '70vh',
      screen: '100vh'
    }),

    /**
     * @example .{top|right|bottom|left|inset}-{size}
     * @docs https://tailwindcss.com/docs/top-right-bottom-left/#app
     */
    inset: {
      '0': '0'
      // auto: 'auto'
    },

    /**
     * @example .tracking-{size}
     * @docs https://tailwindcss.com/docs/letter-spacing/
     */
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },

    /**
     * @example .leading-{size}
     * @docs https://tailwindcss.com/docs/line-height/
     */
    lineHeight: {
      // 1: '1',
      '1.25': '1.25'
      // '1.5': '1.5',
      // '1.75': '1.75',
      // 2: '2'
    },

    /**
     * @example .list-{style}
     * @docs https://tailwindcss.com/docs/list-style-type/
     */
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      roman: 'lower-roman',
      alpha: 'lower-alpha'
    },

    /**
     * @example .m{t|r|b|l}-{size}
     * @docs https://tailwindcss.com/docs/margin/
     */
    margin: (theme, { negative }) => ({
      auto: 'auto',
      '5px': '5px',
      ...theme('spacing'),
      // Negative Margins
      // ...negative(theme('spacing'))
      '-10%': '-10%',
      '-20%': '-20%',
      '-30%': '-30%'
    }),

    /**
     * @example .max-h-{size}
     * @docs https://tailwindcss.com/docs/max-height/#app
     */
    maxHeight: {
      '300px': '300px',
      '400px': '400px',
      '500px': '500px',
      '600px': '600px',
      '80h': '80vh',
      full: '100%',
      screen: '100vh'
    },

    /**
     * @example .max-w-{size}
     * @docs https://tailwindcss.com/docs/max-width/#app
     */
    maxWidth: {
      '100px': '100px',
      '150px': '150px',
      '200px': '200px',
      '250px': '250px',
      '300px': '300px',
      '350px': '350px',
      '400px': '400px',
      '450px': '450px',
      full: '100%'
    },

    /**
     * @example .min-h-{size}
     * @docs https://tailwindcss.com/docs/min-height/#app
     */
    minHeight: {
      '100px': '100px',
      '300px': '300px'
    },

    /**
     * @example .min-w-{size}
     * @docs https://tailwindcss.com/docs/min-width/#app
     */
    minWidth: {
      '0': '0',
      full: '100%'
    },

    /**
     * @example .object-{side}
     * @docs https://tailwindcss.com/docs/object-position/#app
     */
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },

    /**
     * @example .opacity-{number}
     * @docs https://tailwindcss.com/docs/opacity/#app
     */
    opacity: {
      '0': '0',
      '25': '.25',
      '50': '.5',
      '75': '.75',
      '100': '1'
    },

    /**
     * @example .order-{order}
     * @docs https://tailwindcss.com/docs/order/
     */
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12'
    },

    /**
     * @example p{t|r|b|l}-{size}
     * @docs https://tailwindcss.com/docs/padding/
     */
    padding: theme => ({
      ...theme('spacing')
    }),

    /**
     * @example .stroke-{name}
     * @docs https://tailwindcss.com/docs/stroke/
     */
    stroke: {
      current: 'currentColor'
    },

    /**
     * @example .text-{color}
     * @docs https://tailwindcss.com/docs/text-color/
     */
    textColor: theme => theme('colors'),

    /**
     * @example .w-{size}
     * @docs https://tailwindcss.com/docs/width/
     */
    width: {
      auto: 'auto',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/12': `${(1 / 12) * 100}%`,
      '2/12': `${(2 / 12) * 100}%`,
      '3/12': `${(3 / 12) * 100}%`,
      '4/12': `${(4 / 12) * 100}%`,
      '5/12': `${(5 / 12) * 100}%`,
      '6/12': `${(6 / 12) * 100}%`,
      '7/12': `${(7 / 12) * 100}%`,
      '8/12': `${(8 / 12) * 100}%`,
      '9/12': `${(9 / 12) * 100}%`,
      '10/12': `${(10 / 12) * 100}%`,
      '11/12': `${(11 / 12) * 100}%`,
      full: '100%',
      screen: '100vw',
      300: '300px'
    },

    /**
     * @example: .z-{index}
     * @docs https://tailwindcss.com/docs/z-index/
     */
    zIndex: {
      '-1': '-1',
      '0': 0,
      '1': 1
      // '10': 10,
      // '20': 20,
      // '30': 30,
      // '40': 40,
      // '50': 50
    }
  },

  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: [], // ['responsive', 'hover', 'focus'],
    backgroundPosition: [], // ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: [], // ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: [], // ['responsive', 'hover', 'focus'],
    borderRadius: [], // ['responsive'],
    borderStyle: ['responsive'], // Automated in _utilities.scss
    borderWidths: ['responsive'],
    boxShadow: [], // ['responsive', 'hover', 'focus'],
    cursor: [], // ['responsive'],
    display: ['responsive'],
    fill: [], // ['responsive'],
    flexDirection: ['responsive'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: [], // ['responsive'],
    float: ['responsive'],
    fontFamily: false,
    fontSize: ['responsive'],
    fontStyle: ['hover'], // ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    fontWeight: [], // ['responsive', 'hover', 'focus'],
    height: [], // ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: [], // ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxWidth: ['responsive'], // ['responsive'],
    maxWidth: ['responsive'], // ['responsive'],
    minHeight: [], // ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: [], // ['responsive'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: [], // ['responsive'],
    padding: ['responsive'],
    pointerEvents: [], // ['responsive'],
    position: [], // ['responsive'],
    resize: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'], // ['responsive'],
    textColors: ['hover', 'focus'], // ['responsive', 'hover', 'focus'],
    textDecoration: ['hover'], // ['responsive', 'hover', 'focus'],
    textTransform: [], // ['responsive'],
    userSelect: [],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: [], // ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: [] // ['responsive']
  },

  corePlugins: {
    alignContent: false,
    alignSelf: false,
    appearance: false,
    backgroundAttachment: false,
    // backgroundPosition: false,
    backgroundRepeat: false,
    // backgroundSize: false,
    borderCollapse: false,
    borderStyle: false,
    flexGrow: false,
    flexShrink: false,
    float: false,
    fontFamily: false,
    // fontSize: false,
    fontSmoothing: false,
    // inset: false,
    letterSpacing: false,
    listStylePosition: false,
    listStyleType: false,
    minWidth: false,
    objectFit: false,
    objectPosition: false,
    order: false,
    outline: false,
    // pointerEvents: false,
    resize: false,
    stroke: false,
    tableLayout: false,
    verticalAlign: false,
    visibility: false,
    // whitespace: false,
    wordBreak: false
  },

  plugins: []
};
