import React from "react"
import Img from "gatsby-image"


const Carousel = ({ posts }) => {
  console.log(posts[0])
  return (
    <>
      <p>Hello</p>
      <Img fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid}></Img>
    </>
  )
}

export default Carousel
