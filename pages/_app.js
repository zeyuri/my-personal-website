import { ChakraProvider } from "@chakra-ui/core"
import { theme } from "@chakra-ui/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCss theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
