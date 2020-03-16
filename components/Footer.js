import styled from "styled-components"

const Footer = styled.footer`
  padding-top: 1rem;
  border-top: 1px solid #4a5462;
`

export default () => (
  <Footer>
    <p>
      crafted with 💜 in 2020 -{" "}
      <a href="https://github.com/zeyuri/my-personal-website">see the source</a>
    </p>
  </Footer>
)
