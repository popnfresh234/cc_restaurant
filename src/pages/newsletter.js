import React from "react"
import Header from "../components/Header/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignupForm from "../components/Forms/SignupForm"

const newsletter = location => {
  return (
    <>
      <Header />
      <Layout location={location}>
        <SEO title="CC's Newsletter" />
        <h4>Sign up for our newsletter here!</h4>
        <SignupForm />
      </Layout>
    </>
  )
}

export default newsletter
