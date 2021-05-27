import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styled from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./override.css"
import { Carousel } from "react-responsive-carousel"
import { useMediaQuery } from "react-responsive"

const sliderCenterWidth = 50

const CarouselImage = styled(Img)`
  max-height: 500px;
  margin: 0 0.2rem 0 0.2rem;
`

const ContentContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #00000075 20%, #ffffff44 100%);
`

const BorderDiv = styled.div`
  display: flex;
  padding: 1rem;
  min-width: 30%;
  max-width: 30%;
  max-height: 50%;
  border: 1px solid white;
  @media (max-width: 42rem) {
    min-width: 80%;
  }
`

const InnerContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: #ffffff;
`

const PostCarousel = ({ posts }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 42rem)" })
  const [isMobile, setIsMobile] = useState([])
  useEffect(() => {
    setIsMobile(isTabletOrMobile)
  }, [isTabletOrMobile])
  return (
    <Carousel
      infiniteLoop
      centerMode={!isMobile}
      centerSlidePercentage={isMobile ? 100 : sliderCenterWidth}
      showThumbs={false}
      autoPlay={true}
      interval={3000}
    >
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        return (
          <Link key={post.fields.slug} to={post.fields.slug} itemProp="url">
            <CarouselImage
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            />
            <ContentContainer>
              <BorderDiv>
                <InnerContent style={{ width: "100%" }}>
                  <h4 style={{ margin: 0 }}>
                    <span itemProp="headline">{title}</span>
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.date,
                    }}
                    itemProp="date"
                  />
                </InnerContent>
              </BorderDiv>
            </ContentContainer>
          </Link>
        )
      })}
    </Carousel>
  )
}

export default PostCarousel
