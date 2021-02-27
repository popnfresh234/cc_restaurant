import React from "react"
import { GoogleMap, LoadScript, Marker, InfoBox } from "@react-google-maps/api"
import styled from "styled-components"
const containerStyle = {
  width: "100%",
  height: "400px",
}

const restaurantLocation = {
  lat: 49.3582442,
  lng: -123.1062505,
}

const Map = () => {
  const TitleBox = styled.div`
    border: 1px solid black;
    background: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
  `

  const TitleBoxHeader = styled.span`
    font-weight: bold;
    white-space: nowrap;
  `
  const TitleBoxContent = styled.span`
    white-space: nowrap;
  `
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={restaurantLocation}
        zoom={17}
      >
        <Marker position={restaurantLocation} />
        <InfoBox position={restaurantLocation}>
          <TitleBox>
            <TitleBoxHeader>CC's Chinese Restaurant</TitleBoxHeader>
            <TitleBoxContent>5020 Capilano Rd</TitleBoxContent>
            <TitleBoxContent>604-987-9511</TitleBoxContent>

          </TitleBox>
        </InfoBox>
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
