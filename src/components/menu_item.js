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

const MenuText = styled.p`
  font-size: 1rem;
`

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
`

const MenuItem = ({ fluid, name }) => {
  return (
    <li>
      <MenuItemContainer>
        <MenuImage fluid={fluid} />
        <MenuText>{name}</MenuText>
      </MenuItemContainer>
    </li>
  )
}

export default MenuItem
