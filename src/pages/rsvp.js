import React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default class Rsvp extends React.Component {
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
    if(this.props.location.state){
      return (
        <>
          <h1>{this.props.location.state.date.toString()}</h1>
          <h1>{this.state.rows.length}</h1>
          What?
        </>
      )
    }
    else return(
      <h1>Something is wrong!</h1>
    )
  }
}
