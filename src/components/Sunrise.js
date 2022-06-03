import React, {useContext} from "react"
import { CurrentWeather } from "../Context"
import sunrise from "../img/Sunrise.png"
import sunset from "../img/Sunset.png"
import { getTime } from "../utils/getTime"

export default function Sunrise() {

const {weather} = useContext(CurrentWeather)

    return(
        <div className="sunrise--main-container container today-dashboard">
            <p className="dashboard-title">
                Sunrise and Sunset
            </p>
            <div className="sunrise--sun-container">
                <img src={sunrise} className="sunrise--sunrise-img" alt="sunrise" />
                    <p>
                    {getTime(weather.sys.sunrise)}
                    </p>
            </div>
            <div className="sunrise--sun-container">
                <img src={sunset} className="sunrise--sunrise-img" alt="sunrise" />
                    <p>
                    {getTime(weather.sys.sunset)}
                    </p>
            </div>
        </div>
    )
}