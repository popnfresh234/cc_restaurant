import React from "react"
import SEO from "../components/seo"
import MenuItem from "../components/menu_item"
import Layout from "../components/layout"
import Header from "../components/Header/header"
import styled from "styled-components"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import AnimatedButton from "../components/AnimatedButton/AnimatedButton"

const NoStyleOl = styled.ol`
  list-style-type: none;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 42rem) {
    flex-direction: column;
    align-items: center;
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
  @media (max-width: 42rem) {
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
    <>
      <Header/>
      <Layout location={location}>
        <SEO title="Menu" />
        <LinkContainer>
          <a
            href="https://ccs-chinese-restaurant-online-order.square.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton text="Order Online"/>
          </a>
          <a
            href="https://www.skipthedishes.com/CC's-Chinese-Restaurant-North-Vancouver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton text="Delivery With Skip The Dishes"/>
          </a>
          <a
            href="https://www.ubereats.com/vancouver/food-delivery/ccs-chinese-restaurant/-NJ5ZtE5RZycPeBeFWyBPQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton text="Delivery With Uber Eats"/>
          </a>
        </LinkContainer>

        <MenuNavWrapper>
          <StickyDiv>
            <MenuSpacer />
            <MenuNavContainer>
              <MenuNavButton onClick={() => scrollTo("#a00")}>
                Appetizers
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#b00")}>
                SOUPS。SOUP NOODLE
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#c00")}>
                Chicken
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#e00")}>
                Beef
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#f00")}>
                Pork
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#h00")}>
                Seafood
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#j00")}>
                TOFU 。 EGGS。VEGETABLES
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#k00")}>
                CHOW MEIN 。 FRIED RICE
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#m00")}>
                DRUNKEN MONKEY
              </MenuNavButton>
              <MenuNavButton onClick={() => scrollTo("#w00")}>
                Frozen Foods
              </MenuNavButton>
            </MenuNavContainer>
          </StickyDiv>
          <NoStyleOl>{menuItems}</NoStyleOl>
        </MenuNavWrapper>
      </Layout>
    </>
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
