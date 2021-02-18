import React from "react"
import Logo from "../Logo/logo"
import Navbar from "../Navbar/Navbar"
import { useMediaQuery } from "react-responsive"

const Header = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 42rem)" })
  if (isTabletOrMobile) {
    return (
      <>
        <Navbar />
        <Logo />
      </>
    )
  }

  return (
    <>
      <Logo />
      <Navbar />
    </>
  )
}

export default Header
