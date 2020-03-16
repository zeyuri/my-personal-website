import App from "next/app"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    padding: 20px;
    background-color: #282C35;
    color: #DADAE5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
const theme = {
  colors: {
    primary: "#DADAE5"
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
