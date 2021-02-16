import React from "react"
import MenuItem from "../components/menu_item"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"

const NoStyleOl = styled.ol`
  list-style-type: none;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const LinkButton = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #472b2b;
  color: #ffffff;
  padding: 0.8rem 1rem 0.8rem 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-family: arial;
  -webkit-transition: color 0.5s;
  transition: color 0.5s;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #472b2b;
    z-index: -1;
    -webkit-transform: scaleX(1);
    -ms-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }
  :hover {
    color: #472b2b;
  }
  :hover:before {
    -webkit-transform: scaleX(0);
    -ms-transform: scaleX(0);
    transform: scaleX(0);
  }

  @media (max-width: 768px) {
    text-align: center;
    width: 80vw;
    margin: 1rem 0 1rem 0;
  }
`

const MenuNavContainer = styled.div`
  position: sticky;
  top: 8vh;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0 1rem calc(var(--maxWidth-2xl) / -2);
  padding: 1rem;
  flex-direction: column;
  background-color: #ffffff;
  @media (max-width: 768px) {
    margin: 0;
    top: 0;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow: auto;
  }
`

const MenuNavButton = styled.div`
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
  cursor: pointer;
`

const MenuNavWrapper = styled.div`
    display: flex;

  @media (max-width: 768px) {
    flex-direction:column;
  }
`

const MenuSpacer = styled.div`
  height: 8rem;

  @media (max-width: 768px) {
    height: 0rem;
  }
`

const StickyDiv = styled.div`
  position: sticky;
  top: 8vh;
`

const Menu = ({ data, location }) => {
  const pictures = data.allFile.nodes.map(node => {
    const obj = {}
    const name = node.childImageSharp.fluid.originalName.replace(
      /\.[^/.]+$/,
      ""
    )
    const fluid = node.childImageSharp.fluid
    obj[name] = fluid
    return obj
  })

  const picLookup = pictures.reduce((acum, cur) => {
    const key = Object.keys(cur)[0]
    acum[key] = cur[key]
    return acum
  }, {})

  const items = data.allMenuItemsCsv.nodes

  const menuItems = items.map(item => {
    return (
      <MenuItem
        key={item.code}
        fluid={
          picLookup[item.code]
            ? picLookup[item.code]
            : data.file.childImageSharp.fluid
        }
        code={item.code}
        english={item.english}
        chinese={item.chinese}
        price={item.price}
      />
    )
  })

  return (
    <Layout location={location}>
      <LinkContainer>
        <a
          href="https://ccs-chinese-restaurant-online-order.square.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkButton>Order Online</LinkButton>
        </a>
        <a
          href="https://www.skipthedishes.com/CC's-Chinese-Restaurant-North-Vancouver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkButton>Delivery With Skip The Dishes</LinkButton>
        </a>
        <a
          href="https://www.ubereats.com/vancouver/food-delivery/ccs-chinese-restaurant/-NJ5ZtE5RZycPeBeFWyBPQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkButton>Delivery With Uber Eats</LinkButton>
        </a>
      </LinkContainer>

      <MenuNavWrapper>
        <StickyDiv>
          <MenuSpacer/>
          <MenuNavContainer>
            <MenuNavButton onClick={() => scrollTo('#a00')}>Appetizers</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#b00')}>SOUPS。SOUP NOODLE</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#c00')}>Chicken</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#e00')}>Beef</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#f00')}>Pork</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#h00')}>Seafood</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#j00')}>TOFU 。 EGGS。VEGETABLES</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#k00')}>CHOW MEIN 。 FRIED RICE</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#m00')}>DRUNKEN MONKEY</MenuNavButton>
            <MenuNavButton onClick={() => scrollTo('#w00')}>Frozen Foods</MenuNavButton>
          </MenuNavContainer>
        </StickyDiv>
        <NoStyleOl>{menuItems}</NoStyleOl>
      </MenuNavWrapper>
    </Layout>
  )
}

export default Menu
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMenuItemsCsv {
      nodes {
        code
        english
        chinese
        price
      }
    }
    allFile(
      filter: {
        sourceInstanceName: { eq: "assets" }
        relativeDirectory: { eq: "menu" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    file(extension: { eq: "png" }, name: { eq: "place_holder" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
