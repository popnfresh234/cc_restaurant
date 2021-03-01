import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import DateUtils from "../../utils/DateUtils"
import SheetUtils from "../../utils/SheetUtils"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 42rem) {
    border: 1px solid black;
    padding: 0.8rem;
    width: 50vw;
    margin: 0 0 2rem 0;
  }
`

const CardContents = styled.div`
  padding: 0 0.2rem 0 0.2rem;
  text-align: center;
`
const SmallText = styled.div`
  text-align: center;
  font-size: 0.9rem;
`

const OrderText = styled.div`
  margin: 0.5rem 0 0 0;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`

const DeliveryCard = ({ rsvps, date, index }) => {
  const currentRsvps = SheetUtils.FilterRsvps(rsvps, date)
  const data = useStaticQuery(graphql`
    query {
      bowen_delivery: file(
        name: { eq: "bowen_delivery" }
        extension: { eq: "jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bowen_delivery_open: file(
        name: { eq: "bowen_delivery_open" }
        extension: { eq: "jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 800, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <CardContainer>
      <Link to="../rsvp" state={{ date: date, rsvps: rsvps }}>
        <CardContents>
          <span>Current RSVPs: {currentRsvps.length}</span>
          {currentRsvps.length > 4 ? (
            <Img fluid={data.bowen_delivery_open.childImageSharp.fluid} />
          ) : (
            <Img fluid={data.bowen_delivery.childImageSharp.fluid} />
          )}
          <SmallText>
            <strong>{DateUtils.getFormattedDate(date)}</strong>
            <br />@ 3:00pm - 5:00pm
          </SmallText>
        </CardContents>
      </Link>
      {currentRsvps.length > 4 && (
        <a href="https://ccs-chinese-restaurant-online-order.square.site/">
          {" "}
          <OrderText>Cick here to order!</OrderText>
        </a>
      )}
    </CardContainer>
  )
}

export default DeliveryCard
