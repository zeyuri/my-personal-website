import styled from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  height: 94vh;
  display: flex;
  flex-direction: column;
`

export default ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
)
