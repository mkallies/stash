const colors = {
  white: '#fff',
  black: '#000',
  text: '#CBD5E0',
  gray: {
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
  },
}

const breakpoints = [600, 900, 1200].map(n => `${n}px`)

const space = [0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128].map(
  n => `${n / 10}rem`
)

const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72].map(n => `${n / 10}rem`)

const fontWeights = [300, 400, 600, 800]

const radii = []

const borders = [
  `1px solid ${colors.gray['300']}`,
  `1px solid ${colors.gray['600']}`,
  `1px solid ${colors.gray['800']}`,
]

// const lineHeights = {
//   body: 1.7,
//   tall: 2.4,
//   title: 2.25,
// }

// const letterSpacings = {
//   base: '1px',
//   wide: '1.3px',
// }

// const headingStyles = [
//   {
//     fontSize: fontSizes[6],
//     fontWeight: fontWeights[2],
//     lineHeight: lineHeights.title,
//   },
//   {
//     fontSize: fontSizes[5],
//     fontWeight: fontWeights[2],
//     lineHeight: lineHeights.title,
//   },
//   {
//     fontSize: fontSizes[4],
//     fontWeight: fontWeights[2],
//     lineHeight: lineHeights.title,
//   },
//   {
//     fontSize: fontSizes[3],
//     fontWeight: fontWeights[2],
//     lineHeight: lineHeights.title,
//   },
// ]

export const theme = {
  fontWeights,
  radii,
  // lineHeights,
  // headingStyles,
  borders,
  colors,
  breakpoints,
  fontSizes,
  space,
  textStyles: {
    caps: {
      textTransform: 'uppercase',
    },
    capitalized: {
      textTransform: 'capitalize',
    },
    italics: {
      fontStyle: 'italic',
    },
  },
}
