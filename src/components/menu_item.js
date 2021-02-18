import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const MenuImage = styled(Img)`
  max-width: 70px;
  max-height: 70px;
  border-radius: 50%;
  margin: 0 1rem 0 0;
  flex: 1;
  z-index: -1;
`

const MenuText = styled.div`
  font-size: 1rem;
`

const CategoryText = styled.div`
  font-style: normal;
  font-weight: 100;
  font-family: Noto Sans TC;
  line-height: 30px;
  font-size: 24px;
  letter-spacing: 1px;
  color: #472b2b; ;

  @media (max-width: 42rem) {
    font-size: 17px;
  }
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

const CategoryDiv = styled.div`
margin: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const formatPrice = (price) => {
  const priceArr = price.split('')
  priceArr.splice(priceArr.length -2, 0, '.')
  return priceArr.join('')
}

const MenuItem = ({ fluid, code, english, chinese, price }) => {
  const lastTwo = code.slice(code.length-2, code.length)
  if (lastTwo === "00") {
    return (
      <CategoryDiv id={code}>
        <CategoryText>{chinese}</CategoryText>
        <CategoryText>{english}</CategoryText>
      </CategoryDiv>
    )
  }

  return (
    <li>
      <MenuItemContainer>
        <MenuImage fluid={fluid} />
        <DescriptionContainer>
          <MenuHeaderContainer>
            <MenuText>
              {english}
            </MenuText>
            <Dot />
            <MenuText>{formatPrice(price)}</MenuText>
          </MenuHeaderContainer>

          <MenuSubText>{chinese}</MenuSubText>
        </DescriptionContainer>
      </MenuItemContainer>
    </li>
  )
}

export default MenuItem
