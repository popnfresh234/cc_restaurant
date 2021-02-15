import React from "react"
<<<<<<< HEAD
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "./Navbar/Navbar"
import Img from "gatsby-image"
import styled from "styled-components"
=======
import { Link } from "gatsby"
import "@fontsource/noto-sans-tc"
>>>>>>> feat/menu

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const LogoWrap = styled.div`
   
  `
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">
          <>
            <LogoWrap as={Link} to="/">
              <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
            </LogoWrap>
            {header}
          </>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
