import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const MenuImage = styled(Img)`
  max-width: 70px;
  max-height: 70px;
  border-radius: 50%;
  margin: 0 1rem 0 1rem;
  flex: 1;
`

const MenuText = styled.div`
  font-size: 1rem;
`

const MenuSubText = styled.div`
  font-size: 0.8rem;
  font-family: "Noto Sans TC";
  color: #696269;
`

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MenuItem = ({ fluid, code, english, chinese, price }) => {
  return (
    <li>
      <MenuItemContainer>
        <MenuImage fluid={fluid} />
        <DescriptionContainer>
          <MenuText>
            {code.toUpperCase()} {english}
          </MenuText>
          <MenuSubText>{chinese}</MenuSubText>
        </DescriptionContainer>
      </MenuItemContainer>
    </li>
  )
}

export default MenuItem
