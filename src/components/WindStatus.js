import React, {useContext} from "react";
import { CurrentWeather } from "../Context";
import windGeo from "../img/windGeo.svg"
import RenderMap from "./GoogleMap";
import getWindSpeed from "../utils/getWindSpeed"

export default function WindStatus() {

    const {weather, units} = useContext(CurrentWeather)
    const [isMapShown, setIsMapShown] = React.useState(false)

    function ShowMap() {
        return (
        <div className="map-popup">
            <RenderMap hideMap={() => setIsMapShown(prevState => !prevState)}/>
        </div>
        )
      }

    return(
        <div className="wind-status--main-container container today-dashboard">
            {isMapShown ? <ShowMap /> : ""}
            <p className="dashboard-title">
                Wind Status
            </p>
            <p>
                <span className="title">
                    {weather.wind.speed}
                </span>
                <span className="wind--subtitle">
                    {units === "metric" ? <span>m/s</span> : <span>MpH</span>}
                </span>
                <p>
                    {getWindSpeed(weather.wind.speed, units)}
                </p>
                
            </p>
            <div className="sidebar--location wind--geo" onClick={() => setIsMapShown(prevState => !prevState)}>
                <img className="sidebar--geo-icon" src={windGeo} alt="geo logo" />
                <p>
                {weather.name}{`${weather.sys.country ? ", " + weather.sys.country : ""}`}
                </p>
            </div>
        </div>
    )
}