import Layout from "../components/Layout"
import styled from "styled-components"

const Hero = styled.h1`
  font-size: 7vw;
  line-height: 1.4;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 4vw;
  }
`

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0);
  padding: 0.5rem 0.7rem;
  border-radius: 0.5rem;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.primary};

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Main = styled.main`
  flex: 1 0 auto;
`
export default () => (
  <>
    <Layout>
      <Main>
        <Hero>
          Hello, My name is José Yuri.
          <br />
          But you can call me Zé.
          <br />
          We know each other now.
        </Hero>
        <Button>
          <a href="mailto:jozeyuri@gmail.com">let's talk</a>
        </Button>
      </Main>
    </Layout>
  </>
)
