import React from "react"
import { Link } from "gatsby"
import "@fontsource/noto-sans-tc"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

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
        <h4>{title}</h4>
    )
  }

  return (
    <>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header style={{textAlign: "center"}}className="global-header">
          <>{header}</>
        </header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}{` `}DMK Consulting Ltd.
        </footer>
      </div>
    </>
  )
}

export default Layout
