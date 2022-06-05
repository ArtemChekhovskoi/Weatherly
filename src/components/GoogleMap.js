import { useMemo, useState } from "react";
import React, {useContext} from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { CurrentWeather } from "../Context";



export default function RenderMap(props) {
  const {newCoordinates} = useContext(CurrentWeather)
  const startPosition = useMemo(() => ({lat:50, lng: 32}), [])
  const [markers, setMarkers] = useState({})

  function markerAction(event) {
    setMarkers( 
      {
        lat: event.latLng.lat(), 
        lon: event.latLng.lng()
      },
    )
    newCoordinates(event.latLng.lat(), event.latLng.lng())
    if(event.latLng.lat()) {
      props.hideMap()
    }
  } 

  return (
  <div className="googlemap--container">
      <button className="googlemap-close-button" onClick={props.hideMap}>x</button>
      <GoogleMap 
            zoom={6} 
            center={startPosition} 
            mapContainerClassName="google-map" 
            onClick={(event) => markerAction(event)}>
      <Marker position={{lat: markers.lat, lng: markers.lon}}/>
    </GoogleMap>
  </div>)
}
