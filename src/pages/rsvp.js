import React from "react"
import DateUtils from "../utils/DateUtils"
import Layout from "../components/layout"
import Header from "../components/Header/header"
import EmailForm from "../components/Forms/EmailForm"
import SheetUtils from "../utils/SheetUtils"
import SEO from "../components/seo"

const title = "Bowen RSVP"

const Rsvp = ({ location }) => {
  if (location.state) {
    return (
      <>
        <Header />
        <Layout location={location}>
          <SEO title = {title}/>
          <p>
            Special Bowen Delivery for{" "}
            <strong>
              {DateUtils.getFormattedDate(
                new Date(location.state.date)
              )}
            </strong>
          </p>
          <p>
            Currently there are{" "}
            <strong>
              {
                SheetUtils.FilterRsvps(
                  location.state.rsvps,
                  location.state.date
                ).length
              }
            </strong>{" "}
            people registered to order!
          </p>
          <EmailForm
            rsvps={location.state.rsvps}
            date={location.state.date}
          />
        </Layout>
      </>
    )
  } else return <h1>Something is wrong!</h1>
}

export default Rsvp

