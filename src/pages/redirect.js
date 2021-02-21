import React from "react"
import Layout from "../components/layout"
import {Link} from "gatsby"

const Redirect = ({ location }) => {
  return (
      <Layout location={location}>
          <h4>Thank you for {location.state.action}!</h4>
          <Link to="/">Back to our Home Page</Link>
      </Layout>
  )
}

export default Redirect