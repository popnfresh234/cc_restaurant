import React from "react"
import { Link, graphql } from "gatsby"
const Home = ({ data, location }) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/">
          <span>Go Here</span>
      </Link>
    </div>
  )
}

export default Home
