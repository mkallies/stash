import styled from 'styled-components'
import {
  alignItems,
  alignSelf,
  borders,
  boxShadow,
  color,
  display,
  flex,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  maxHeight,
  maxWidth,
  opacity,
  order,
  overflow,
  position,
  space,
  width,
  zIndex,
} from 'styled-system'

export const Box = styled.div`
  ${alignItems}
  ${alignSelf}
  ${borders}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${opacity}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${maxHeight}
  ${maxWidth}
  ${order}
  ${overflow}
  ${position}
  ${space}
  ${width}
  ${zIndex}
`

Box.defaultProps = {
  display: 'flex',
}
