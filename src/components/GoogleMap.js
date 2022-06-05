import { useMemo } from "react";
import React, {useContext} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { CurrentWeather } from "../Context";

export default function RenderMap() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyCylEsoFekpNZ9dbuP1a_puJnErC_kTEEw"
  })
  

  if(!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  const {newCoordinates} = useContext(CurrentWeather)
  const startPosition = React.useMemo(() => ({lat:44, lng: -80}), [])
  const [markers, setMarkers] = React.useState({lat: 1, lon: 1})

  function setMapCoord() {
    newCoordinates(markers.lat, markers.lon)
  }

  return (
  <div className="googlemap--container">
      <GoogleMap 
            zoom={10} 
            center={startPosition} 
            mapContainerClassName="google-map" 
            onClick={(event) => {
              setMarkers( 
              {
                lat: event.latLng.lat(), 
                lon: event.latLng.lng()
              },
            )
          }}>
      <Marker key={markers.lat} position={{lat: parseInt(markers.lat), lng: parseInt(markers.lon)}}/>
    </GoogleMap>
    <button 
      className="googlemap--button"
      onClick={setMapCoord}>Get weather</button>
  </div>)
}