import React, {useContext} from "react"
import { CurrentWeather } from "../Context"
import getHumidityText from "../utils/getHumidityText"

export default function Humidity() {

const {weather} = useContext(CurrentWeather)

    return(
        <div className="humidity--main-container container today-dashboard">
            <p className="dashboard-title">
                Humidity
            </p>
            <div className="humidity--container">
                <div>
                    <p>
                    <span className="title">
                        {weather.main.humidity}
                    </span>
                    <span className="wind--subtitle">
                        %
                    </span>
                    </p>
                    <p>
                        {getHumidityText(weather.main.humidity)}
                    </p>
                </div>
                <div className="humidity--slider">
                    <div className="humidity-circle" style={{marginTop: `${(100 - weather.main.humidity) * 3}%`}}>

                    </div>
                </div>
            </div>
        </div>
    )
}