import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@soller-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'
export const {
  styled,
  css,
  globalCss,
  theme,
  keyframes,
  getCssText,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
})
