import React from "react"

const Carousel = ({ posts }) => {
    console.log(posts[posts.length-1].excerpt)
  return (
    <>
      <p>Hello</p>
      {posts.length}
    </>
  )
}

export default Carousel