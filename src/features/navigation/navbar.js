import React from 'react'
import Logo from '../../images/mj64.png'
import { Box, Img, Heading } from '../../components/elements'

const Navbar = () => {
  return (
    <Box>
      <Img src={Logo} />
      <Heading>Stash.</Heading>
    </Box>
  )
}

export { Navbar }
