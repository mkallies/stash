import styled from 'styled-components'
import { typography } from 'styled-system'
import { Box } from './box'

export const buttonStyles = ({ theme, variant = 'primary' }) => {
  // const { colors, radii } = theme

  switch (variant) {
    case 'primary': {
      return `
        

        &:focus,
        &:hover {

        }
      `
    }

    case 'secondary': {
      return `


        &:hover,
        &:focus {

        }
      `
    }

    case 'minimal': {
      return `


        &:focus,
        &:hover {

        }
      `
    }

    case 'navbar': {
      return `
        background: none;
        color: ${theme.colors.greys[0]};
        font-weight: 600;
        border: none;
        padding: 0;


        &:Focus,
        &:hover,
        &:active {
          text-decoration: underline;
        }
      `
    }

    default:
      return ''
  }
}

export const Button = styled(Box)`
  &:hover {
    cursor: pointer;
  }

  ${buttonStyles} ${typography};
`

Button.defaultProps = {
  as: 'button',
}
