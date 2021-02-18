import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const LogoWrapper = styled.div`
  height: 20vh;
`
const LogoImage = styled(Img)`
  height: 100%;
  width: 100%1;
  object-fit: contain;
`



const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "gatsby-icon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 800, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <LogoWrapper to="/">
      <LogoImage
        imgStyle={{ objectFit: "contain" }}
        fluid={data.file.childImageSharp.fluid}
        alt="logo"
      />
    </LogoWrapper>
  )
}

export default Logo
