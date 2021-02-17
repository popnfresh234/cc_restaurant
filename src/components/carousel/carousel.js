import React from "react"
import Img from "gatsby-image"
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselImage = styled(Img)`
  max-height: 500px;
`

const PostCarousel = ({ posts }) => {
  return (
    <Carousel infiniteLoop centerMode centerSlidePercentage={50}>
      <CarouselImage fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid}/>
      <CarouselImage fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid}/>
      <CarouselImage fluid={posts[0].frontmatter.featuredImage.childImageSharp.fluid}/>
    </Carousel>
  )
}

export default PostCarousel
