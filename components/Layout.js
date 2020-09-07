import { Box, Link, Flex } from "@chakra-ui/core"

const Layout = ({ children }) => {
  return (
    <Box maxW="60rem" w="100%" marginX="auto">
      <Header />
      {children}
    </Box>
  )
}

const Header = () => {
  return (
    <Flex as="header" justify="space-between" align="center" w="100%">
      <h1>zeyuri</h1>
      <Link href="#">teste</Link>
    </Flex>
  )
}

export default Layout
