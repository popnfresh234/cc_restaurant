import React from "react"
import Header from "../components/Header/header"
import styled from "styled-components"
import Layout from "../components/layout"
import AnimatedButton from "../components/AnimatedButton/AnimatedButton"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
`

const SpacerDiv = styled.div`
  flex: 1;
`

const Delivery = ({ location }) => {
  return (
    <>
      <Header />
      <Layout location={location}>
        <Wrapper>
          <Row>
            <SpacerDiv />
            <div></div>
            <AnimatedButton text="Delivery with Skip The Dishes" />
            <SpacerDiv />
          </Row>
          <Row>
            <SpacerDiv />
            <AnimatedButton text="Delivery With Uber Eats" />
            <SpacerDiv />
          </Row>

          <Row>
            <SpacerDiv />
            <AnimatedButton text="Bowen Island Special Delivery" />
            <SpacerDiv />
          </Row>
        </Wrapper>
      </Layout>
    </>
  )
}

export default Delivery
