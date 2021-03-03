import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Row = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`

const Cell = styled.span`
  text-align: center;
  width: 100%;
`

const Contact = () => {
  return (
    <Wrapper>
      <h4>Contact Us</h4>
      <Row>
        <Cell>Phone:</Cell>
        <Cell>604 987 9511</Cell>
      </Row>
      <Row>
        <Cell>E-mail:</Cell>
        <Cell><a href="mailto:ccdm@capheights.ca">ccdm@capheights.ca</a></Cell>
      </Row>
      <Row>
          <Cell>Address:</Cell>
          <Cell>5020 Capilano Road, North Vancouver</Cell>
      </Row>
    </Wrapper>
  )
}

export default Contact
