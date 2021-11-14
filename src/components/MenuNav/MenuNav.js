import React from "react"
import styled from "styled-components"
import MenuNavButton from "./MenuNavButton"

const MenuNavContainer = styled.div`
  position: sticky;
  top: 8vh;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 1rem calc(var(--maxWidth-2xl) / -2);
  padding: 1rem;
  flex-direction: column;
  background-color: #ffffff;
  @media (max-width: 42rem) {
    margin: 0;
    top: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
  }
`

const MenuNavWrapper = styled.div`
  display: flex;

  @media (max-width: 42rem) {
    flex-direction: column;
  }
`

const MenuSpacer = styled.div`
  height: 8rem;

  @media (max-width: 42rem) {
    height: 0rem;
  }
`

const StickyDiv = styled.div`
  position: sticky;
  top: 8vh;
`

const NoStyleOl = styled.ol`
  list-style-type: none;
`

const MenuNav = ({ menuItems }) => {
  return (
    <MenuNavWrapper>
      <StickyDiv>
        <MenuSpacer />
        <MenuNavContainer>
          <MenuNavButton text="appetizers" id="#a00" />
          <MenuNavButton text="SOUPS。SOUP NOODLE" id="#b00" />
          <MenuNavButton text="Chicken" id="#c00" />
          <MenuNavButton text="beef" id="#e00" />
          <MenuNavButton text="pork" id="#f00" />
          <MenuNavButton text="seafood" id="#h00" />
          <MenuNavButton text="TOFU 。 EGGS。VEGETABLES" id="#j00" />
          <MenuNavButton text="CHOW MEIN 。 FRIED RICE" id="#k00" />
          <MenuNavButton text="drunken monkey" id="#m00" />
          {/* <MenuNavButton text="Frozen Foods" id="#w00" /> */}
        </MenuNavContainer>
      </StickyDiv>
      <NoStyleOl>{menuItems}</NoStyleOl>
    </MenuNavWrapper>
  )
}

export default MenuNav
