import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./override.css"
import { Carousel } from "react-responsive-carousel"
import { useMediaQuery } from 'react-responsive'


const CarouselImage = styled(Img)`
  max-height: 500px;
  margin: 0 0.2rem 0 0.2rem;
`


const PostCarousel = ({ posts }) => {
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 42rem)' })

  return (
    <Carousel infiniteLoop centerMode={!isTabletOrMobile} centerSlidePercentage={50}>
      {posts.map(post => {
        return (
          <Link to={post.fields.slug} itemProp="url">
            <CarouselImage
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </Link>
        )
      })}
    </Carousel>
  )
}

export default PostCarousel
