// import { hot } from 'react-hot-loader/root'
import React from 'react'
import { Home } from '../home'
import { Navbar } from '../navigation'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from '../../styles'
import { Box } from '../../components/elements'
import { ProductsProvider } from '../products'

const App = () => (
  <ThemeProvider theme={theme}>
    <Box alignItems="center" flexDirection="column" px={3}>
      <GlobalStyle />
      <ProductsProvider>
        <Navbar />
        <Home />
      </ProductsProvider>
    </Box>
  </ThemeProvider>
)

export default App
