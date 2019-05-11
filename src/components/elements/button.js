import styled from 'styled-components'
import {
  fontWeight,
  borderColor,
  borderRadius,
  buttonStyle,
  fontSize,
  letterSpacing,
  lineHeight,
} from 'styled-system'
import { Box } from './box'

export const Button = styled(Box)`
  appearance: none;
  display: inline-block;
  text-align:  center;
  text-decoration:  none;
  
  &:hover {
    cursor: pointer
  }
  
  ${fontWeight}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${fontSize}
  ${letterSpacing}
  ${lineHeight}
`

Button.defaultProps = {
  as: 'button',
}
