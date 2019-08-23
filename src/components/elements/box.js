import styled from 'styled-components'
import {
  color,
  position,
  space,
  layout,
  flexbox,
  border,
  overflow,
} from 'styled-system'

export const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${overflow}
`

Box.defaultProps = {
  display: 'flex',
}
