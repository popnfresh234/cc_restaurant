import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { getFormattedTime } from "../utils/DateUtils"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`

const Cell = styled.span`
  text-align: center;
  flex: 1;
`

const BusinessHours = () => {
  return (
    <StaticQuery
      query={graphql`
        query HoursQuery {
          allBusinessHoursCsv {
            nodes {
              day
              open
              close
            }
          }
        }
      `}
      render={data => (
        <Wrapper>
          <Row>
            <h4>Business Hours</h4>
          </Row>
          <Row>
            <Cell>Monday</Cell>
            <Cell>Closed</Cell>
          </Row>
          <Row>
            <Cell>Tuesday</Cell>
            <Cell>12:00PM ~ 9:00PM</Cell>
          </Row>
          <Row>
            <Cell>Wednesday</Cell>
            <Cell>12:00PM ~ 9:00PM</Cell>
          </Row>
          <Row>
            <Cell>Thursday</Cell>
            <Cell>12:00PM ~ 9:00PM</Cell>
          </Row>
          <Row>
            <Cell>Friday</Cell>
            <Cell>12:00PM ~ 9:00PM</Cell>
          </Row>
          <Row>
            <Cell>Saturday</Cell>
            <Cell>12:00PM ~ 9:00PM</Cell>
          </Row>
          <Row>
            <Cell>Sunday</Cell>
            <Cell>12:00PM ~ 9:00PM</Cell>
          </Row>
          
        </Wrapper>
      )}
    />
  )
}

export default BusinessHours
