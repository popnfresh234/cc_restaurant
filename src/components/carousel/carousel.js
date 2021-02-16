import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const CarouselContainer = styled.div`
  display: flex;
`

const CarouselImage = styled(Img)`
  max-height: 500px;
  flex: 1;
`


const Carousel = ({ posts }) => {
  console.log(posts[0])
  return (
    <CarouselContainer>
      <CarouselImage fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid}></CarouselImage>
      <CarouselImage fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid}></CarouselImage>
      <CarouselImage fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid}></CarouselImage>

    </CarouselContainer>
  )
}

export default Carousel
