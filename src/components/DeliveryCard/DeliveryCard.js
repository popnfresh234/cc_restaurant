import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const CardContents = styled.div`
  padding: 0 0.2rem 0 0.2rem;
`
const SmallText = styled.div`
  text-align: center;
  font-size: 0.9rem;
`

const getFormattedDate = date => {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

const DeliveryCard = props => {
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
      <Link to="../rsvp" state={{date: props.date}}>
        <CardContents>
          {props.index === 0 ? (
            <Img fluid={data.bowen_delivery_open.childImageSharp.fluid} />
          ) : (
            <Img fluid={data.bowen_delivery.childImageSharp.fluid} />
          )}
          <SmallText>
            <strong>{getFormattedDate(props.date)}</strong>
            <br />@ 3:00pm - 5:00pm
          </SmallText>
        </CardContents>
      </Link>
    </CardContainer>
  )
}

export default DeliveryCard
