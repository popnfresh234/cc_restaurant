import React from "react";
import MenuItem from '../components/menu_item'
import Img from "gatsby-image"

const Menu = ({ data }) => {
    const pictures = data.allImageSharp.nodes;
    console.log(pictures)
    const items = data.allMenuItemsCsv.nodes
    return (
        <>
        <ol>
            {items.map((item) => {
                return (
                    <li>

                        {item.name}
                    </li>)
            })}
        </ol>

        <ol>
            {pictures.map((picture)=> {
                return (
                    <li><Img fluid={picture.fluid}/></li>
                )
            })}
        </ol>
        </>
    )
}

export default Menu;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMenuItemsCsv {
        nodes {
          name
        }
      }  
    allImageSharp {
        nodes {
            fluid(maxWidth: 200, maxHeight: 200) {
                originalName
                ...GatsbyImageSharpFluid
              }
        }
    }
  }
`

