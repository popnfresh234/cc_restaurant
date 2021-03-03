import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/Carousel/carousel"
import Header from "../components/Header/header"
import BusinessHours from "../components/BusinessHours"
import Map from "../components/map"
import Contact from "../components/contact"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title || `Title`
  const title = "Home"
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title={title} />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
      <Header />
      <Carousel posts={posts}></Carousel>
      <Layout location={location} title={siteTitle}>
        <SEO title={title} />
        <h4>Capilano Heights is back with a new brand image!</h4>
        <Img fluid={data.file.childImageSharp.fluid} />
        <p>
          Long time serving the North Vancouver community, we are back with a
          new brand image.
        </p>
        <p>CC's CHINESE RESTAURANT presented by Drunken Monkey</p>
        <p>
          In loving memory of C.C. Sun, we rename Capilano Heights with his
          name. And this time, we are going to bring some new flavour with
          Drunken Monkey, a restaurant CC's grandson, Alex, opened in Taipei,
          Taiwan. Besides bringing some Taiwanese style dishes in the
          restaurant, Drunken Monkey cooking class is also on its way to open!
        </p>
        <p>
          C.C. Sun, started Capilano Heights in 1972 and is very proud to have
          served many, many happy customers. We offer a wide-ranging menu
          together with a complete liquor, wine and beer selection at very
          reasonable prices. Our atmosphere is warm and casual, including an all
          glass atrium where customers can enjoy the garden view all year round.
          Please come and join us for a wonderful dining experience for all your
          friends and family. See you soon!
        </p>
        <Map/>
        <Contact/>
        <BusinessHours />
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(name: { eq: "ccs_restaurant_hero" }, extension: { eq: "jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, pngQuality: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
