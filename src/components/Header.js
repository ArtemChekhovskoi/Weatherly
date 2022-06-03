import React, {useContext} from "react";
import { CurrentWeather } from "../Context";

export default function Header() {
const {setMetric, setImperial, units, isWeeklyForecast, turnWeeklyForecast, turnDailyForecast} = useContext(CurrentWeather)

const currentUnitsStyle = {backgroundColor: "#5B9BFC", color: "#fff"}
const currentForecastStyle = {color: "#5B9BFC"}

    return(
        <div className="header--main-container">
            <div className="header--today-week">
                <a 
                style={isWeeklyForecast ? {} : currentForecastStyle}
                onClick={turnDailyForecast}
                href="#">Today</a>
                <a style={isWeeklyForecast ? currentForecastStyle : {}}
                onClick={turnWeeklyForecast}
                href="#">5 Days</a>
            </div>
            <div className="header--temp-buttons">
                <button 
                style={units==="metric" ? currentUnitsStyle : {}} 
                onClick={setMetric}>
                    C
                </button>
                <button 
                style={units==="imperial" ? currentUnitsStyle : {}} 
                onClick={setImperial}>
                    F
                </button>
            </div>
        </div>
    )
}