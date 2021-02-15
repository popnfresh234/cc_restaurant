import React from "react"
import MenuItem from "../components/menu_item"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"

const NoStyleOl = styled.ol`
  list-style-type: none;
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
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
      <NoStyleOl>{menuItems}</NoStyleOl>
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
