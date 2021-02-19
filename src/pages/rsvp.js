import React from "react"
import { graphql, useStaticQuery } from "gatsby"

class Rsvp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: "dog",
    }
  }
  componentDidMount() {
    fetch(
      "https://sheets.googleapis.com/v4/spreadsheets/" +
        process.env.BOWEN_SHEET_ID +
        "/values/" +
        process.env.BOWEN_PAGE_NAME +
        "!A1:B100000000?key=" +
        process.env.BOWEN_API_KEY
    )
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        this.setState({
          rows: jsonResponse.values,
        })
      })
  }
  render() {
    console.log(this.state.rows)
    return (
      <>
        <h1>{this.state.rows.length}</h1>
        What?
      </>
    )
  }
}

export default Rsvp
