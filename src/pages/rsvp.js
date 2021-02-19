import React from "react"
import DateUtils from "../utils/DateUtils"
import Layout from "../components/layout"
import Header from "../components/Header/header"
import EmailForm from "../components/EmailForm/EmailForm"

export default class Rsvp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: [],
    }
  }

  componentDidMount() {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/" +
        process.env.BOWEN_SHEET_ID +
        "/values/" +
        process.env.BOWEN_PAGE_NAME +
        "!A2:f200000000?key=" +
        process.env.BOWEN_API_KEY
    )
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        const parsedRows = jsonResponse.values.map(row => {
          return {
            firstName: row[1],
            lastName: row[2],
            phone: row[3],
            email: row[4],
            orderDate: row[5],
          }
        })
        this.setState({
          rows: parsedRows,
        })
      })
  }
  render() {
    if (this.props.location.state) {
      return (
        <>
          <Header />
          <Layout location={this.props.location}>
            <p>
              Special Bowen Delivery for{" "}
              <strong>
                {DateUtils.getFormattedDate(
                  new Date(this.props.location.state.date)
                )}
              </strong>
            </p>
            <p>
              Currently there are{" "}
              <strong>
                {this.state.rows.filter(row => {
                  return parseInt(row.orderDate,10) === this.props.location.state.date
                }).length}
              </strong>{" "}
              people registered to order!
            </p>
            <EmailForm rows={this.state.rows} date={this.props.location.state.date} />
          </Layout>
        </>
      )
    } else return <h1>Something is wrong!</h1>
  }
}
