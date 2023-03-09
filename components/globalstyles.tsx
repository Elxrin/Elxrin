import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #000;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ::selection {
    background-color: rgb(238, 241, 250);
    color: rgb(26, 87, 232);
  }

  :root {
    --background: white;
    --foreground: black;
  }
  
  [data-theme='dark'] {
    --background: black;
    --foreground: white;
  }
`

export default GlobalStyle