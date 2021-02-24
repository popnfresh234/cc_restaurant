import React from "react"
import SEO from "../components/seo"
import MenuItem from "../components/menu_item"
import Layout from "../components/layout"
import Header from "../components/Header/header"
import styled from "styled-components"
import { graphql } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import AnimatedButton from "../components/AnimatedButton/AnimatedButton"
import MenuNav from "../components/MenuNav/MenuNav"

const title = "Menu"

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 42rem) {
    flex-direction: column;
    align-items: center;
  }
`

const Menu = ({ data, location }) => {
  const pictures = data.allFile.nodes.map(node => {
    const obj = {}
    const itemCode = node.childImageSharp.fluid.originalName.match(/^[^_]+(?=_)/);
    if(itemCode){
      const name = itemCode[0].toLowerCase()
      const fluid = node.childImageSharp.fluid
      obj[name] = fluid
    }
    return obj
  })

  console.log(pictures)
  const picLookup = pictures.reduce((acum, cur) => {
    const key = Object.keys(cur)[0]
    acum[key] = cur[key]
    return acum
  }, {})

  const items = data.allMenuItemsCsv.nodes

  const menuItems = items.map(item => {
    console.log(picLookup[item])
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
      <Header />
      <Layout location={location} title={title}>
        <SEO title="Menu" />
        <LinkContainer>
          <a
            href="https://ccs-chinese-restaurant-online-order.square.site/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton text="Order Online" />
          </a>
          <a
            href="https://www.skipthedishes.com/CC's-Chinese-Restaurant-North-Vancouver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton text="Delivery With Skip The Dishes" />
          </a>
          <a
            href="https://www.ubereats.com/vancouver/food-delivery/ccs-chinese-restaurant/-NJ5ZtE5RZycPeBeFWyBPQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedButton text="Delivery With Uber Eats" />
          </a>
        </LinkContainer>
        <MenuNav menuItems={menuItems} />
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
    file(extension: { eq: "png" }, name: { eq: "P00_place_holder" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 200) {
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
