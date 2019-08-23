import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Oxygen-Sans,
      Ubuntu,
      Cantarell,
      "Helvetica Neue",
      sans-serif;
      -webkit-font-smoothing: antialiased;
    }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;

    -webkit-box-sizing: border-box !important;
    -moz-box-sizing: border-box !important;
    -ms-box-sizing: border-box !important;
    box-sizing: border-box !important;
  }

  a {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border: 0;
  }

  body {
    font-size: 1.6rem;
    font-weight: 400;
  }
`

export { GlobalStyle }
