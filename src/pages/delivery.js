import React from "react"
import Header from "../components/Header/header"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AnimatedButton from "../components/AnimatedButton/AnimatedButton"
import { Link } from "gatsby"

const title = "Choose a Delivery Service!"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ExternalLink = styled.a`
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
`
const InternalLink = styled(Link)`
  margin: 0 0 1rem 0;
  display: flex;
  justify-content: center;
  text-decoration: none;
`
const SpacerDiv = styled.div`
  flex: 1;
`

const Delivery = ({ location }) => {
  return (
    <>
      <Header />
      <Layout title={title} location={location}>
        <SEO title="Delivery Services" />
        <Wrapper>
          <ExternalLink
            href="https://www.skipthedishes.com/CC's-Chinese-Restaurant-North-Vancouver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpacerDiv />
            <AnimatedButton flex={2} text="Delivery with Skip The Dishes" />
            <SpacerDiv />
          </ExternalLink>

          <ExternalLink
            href="https://www.ubereats.com/vancouver/food-delivery/ccs-chinese-restaurant/-NJ5ZtE5RZycPeBeFWyBPQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpacerDiv />
            <AnimatedButton flex={2} text="Delivery With Uber Eats" />
            <SpacerDiv />
          </ExternalLink>

          <ExternalLink
            href="https://www.doordash.com/store/cc-s-chinese-restaurant-north-vancouver-163752/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SpacerDiv />
            <AnimatedButton flex={2} text="Delivery With Door Dash" />
            <SpacerDiv />
          </ExternalLink>

          <InternalLink to="../bowen">
            <SpacerDiv />
            <AnimatedButton flex={2} text="Bowen Island Special Delivery" />
            <SpacerDiv />
          </InternalLink>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Delivery
