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

const Dot = styled.div`
flex: 1;
align-self: stretch;
margin: 0 6px 6px 6px;
border-bottom: 1px dashed black;
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

const MenuHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const MenuItem = ({ fluid, code, english, chinese, price }) => {
  return (
    <li>
      <MenuItemContainer>
        <MenuImage fluid={fluid} />
        <DescriptionContainer>
          <MenuHeaderContainer>
            <MenuText>
              {code.toUpperCase()} {english}
            </MenuText>
            <Dot />
            <MenuText>{price}</MenuText>
          </MenuHeaderContainer>

          <MenuSubText>{chinese}</MenuSubText>
        </DescriptionContainer>
      </MenuItemContainer>
    </li>
  )
}

export default MenuItem
