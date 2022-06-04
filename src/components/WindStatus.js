import React, {useContext} from "react";
import { CurrentWeather } from "../Context";
import windGeo from "../img/windGeo.svg"

export default function WindStatus() {

    const {weather, units} = useContext(CurrentWeather)

    return(
        <div className="wind-status--main-container container today-dashboard">
            <p className="dashboard-title">
                Wind Status
            </p>
            <p>
                <span className="title">
                    {weather.wind.speed}
                </span>
                <span className="wind--subtitle">
                {units === "metric" ? <span>km/h</span> : <span>MpH</span>}
                    
                </span>
            </p>
            <div className="wind--geo">
                <img src={windGeo} alt="geo logo" />
                <p>
                {weather.name} {`${weather.sys.country ? ", " + weather.sys.country : ""}`}
                </p>
            </div>
        </div>
    )
}