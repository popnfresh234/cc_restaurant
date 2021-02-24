import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"
import { useMediaQuery } from "react-responsive"

const StyledButton = styled.div`
  font-style: normal;
  font-weight: 100;
  font-family: Noto Sans TC;
  line-height: 30px;
  font-size: 12px;
  letter-spacing: 1px;
  color: #472b2b;
  min-width: 10vw;
  text-align: center;
  margin: 0.2rem;
  padding: 0.8rem 1rem 0.8rem 1rem;
  border: 1px solid #472b2b;
  flex-shrink: 0;
  text-transform: uppercase;
  cursor: pointer;
`

const MenuNavButton = ({ text, id }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 42rem)" })
  const blockPosition = isTabletOrMobile ? "center" : "start"
  return (
    <StyledButton onClick={() => scrollTo(id, blockPosition)}>
      {text}
    </StyledButton>
  )
}

export default MenuNavButton
