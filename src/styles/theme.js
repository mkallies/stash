const createMediaQuery = n => `@media screen and (min-width:${n})`

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i]
      },
    })
  )

export const breakpoints = [32, 40, 48, 64].map(n => n + 'em')

export const mediaQueries = breakpoints.map(createMediaQuery)

const aliases = ['sm', 'md', 'lg', 'xl']

addAliases(breakpoints, aliases)
addAliases(mediaQueries, aliases)

export const space = [0, 4, 8, 16, 32, 64, 128]

export const fontSizes = [1.2, 1.4, 1.6, 2, 2.4, 3.2, 4, 5.6, 7.2].map(
  n => n + 'rem'
)

export const fontWeights = {
  light: 300,
  medium: 500,
  bold: 700,
}

export const colors = {}

export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`,
]

const theme = {
  breakpoints,
  mediaQueries,
  space,
  fontSizes,
  fontWeights,
  colors,
  boxShadows,
}

export default theme
