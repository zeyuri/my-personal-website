import Link from "next/link"
import styled from "styled-components"

const Logo = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  img {
    margin-right: 1rem;
  }
  h1 {
  }
`
const Navi = styled.nav`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #4a5462;
  margin-bottom: 3rem;
`

const Header = () => (
  <header>
    <Navi>
      <ul>
        <Logo>
          <Link href="/">
            <a title="Home">
              <img src="/logo-black.svg" alt="zeyuri logo" width="75px" />
            </a>
          </Link>
          <h1>front-end dev</h1>
        </Logo>
      </ul>
    </Navi>
  </header>
)

export default Header
