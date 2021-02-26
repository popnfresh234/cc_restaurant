import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

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

          {data.allBusinessHoursCsv.nodes.map(day => {
            return (
              <Row>
                <Cell>{day.day}</Cell>
                <Cell>
                  {day.open}
                  {" ~ "}
                  {day.close}
                </Cell>
              </Row>
            )
          })}
        </Wrapper>
      )}
    />
  )
}

export default BusinessHours
