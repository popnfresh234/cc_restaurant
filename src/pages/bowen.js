import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header/header"
import Layout from "../components/layout"
import DeliveryCard from "../components/DeliveryCard/DeliveryCard"
import styled from "styled-components"
import DateUtils from '../utils/DateUtils'


const DeliveryCardsContainer = styled.div`
  display: flex;
`

const Bowen = ({ data, location }) => {
  const deliveryDates = data.allDeliveryDatesCsv.nodes
  const today = new Date()
  const upcomingDates = DateUtils.getNextFourDates(deliveryDates, today)

  return (
    <>
      <Header />
      <Layout location={location}>
        <h2>SPECIAL BOWEN DELIVERY SIGN UP</h2>
        <p>
          If you’d like to place an order, please click one of the dates below
          and RSVP inside the page. You’re welcome to email us to create a
          certain date too. Please email to{" "}
          <a href="mailto:ccdm@capheights.ca">ccdm@capheights.ca</a> !
        </p>
        <h4>CHOOSE A DATE AND RSVP</h4>
        <p>
          We need a minimum of 5 orders to make a delivery, if we have reached 5
          RSVP here before 12pm the day before the delivery date, we will send
          an email confirmation to inform the delivery will be taken place.
        </p>
        <h4>WAIT FOR CONFIRMATION EMAIL</h4>
        <p>
          Once you have received an e-mail confirmation that we will be able to
          make the delivery. Please place your order before 12pm on the day of
          the delivery on our online store{" "}
          <a href="https://ccs-chinese-restaurant-online-order.square.site/">
            HERE
          </a>{" "}
          and leave <strong>SPECIAL BOWEN DELIVERY</strong> as a note in your
          order.
        </p>
        <h4>PLACE YOU ORDER BEFORE 12pm ON THE DAY OF DELIVERY</h4>
        <p>
          Please place your order before 12pm on the day of the delivery on our
          online store and leave <strong>SPECIAL BOWEN DELIVERY</strong> as a
          note in your order. ( There is an input field at the last step when
          checking out, please click into THIS POST for instruction on leaving
          note in online store.) Please specify the pick up time at 3pm on the
          day of the delivery. ( or anytime between 3 to 5pm if 3pm is not
          available){" "}
          <a href="https://ccs-chinese-restaurant-online-order.square.site/">
            Online Store Link
          </a>
        </p>
        <h4>PICKUP LOCATION AND TIME</h4>
        <p>
          We generally will take the 4:35pm ferry from Horseshoe Bay to Snug
          Cove. The pickup point will be at the <strong>LOWER</strong> parking
          lot <strong>NEXT</strong> to the General Store, NOT the main parking
          lot.
        </p>
        <DeliveryCardsContainer>
          {upcomingDates.map((date, index) => {
            return (
               <DeliveryCard date={date} index={index} />
            )
          })}
        </DeliveryCardsContainer>
      </Layout>
    </>
  )
}

export default Bowen

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allDeliveryDatesCsv {
      nodes {
        date
      }
    }
  }
`
