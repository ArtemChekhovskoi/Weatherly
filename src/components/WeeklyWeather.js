import React, {useContext} from "react"
import { CurrentWeather } from "../Context"
import SwitchUnits from "../utils/switchUnits"
import { getTime } from "../utils/getTime"


export default function WeeklyWeather() {

    const {forecast, isWeeklyForecast} = useContext(CurrentWeather)

    function getCorrectDay(timestamp) {
        let currentDay = new Date(timestamp)
        var days = [
            'Sat',
            'Mon',
            'Tue',
            'Wed',
            'Th',
            'Fri',
            'Sun'
          ];
        if (timestamp == 0) {
            return " "
        } else {
            return days[currentDay.getDay()] + ", "
        }
    }

    function forecastHtml(day) {
        return(
            <div key={day.dt} className="daily-weather--main-container container">
                <p className="daily--title">{getCorrectDay(day.dt_txt)}{getTime(day.dt)}</p>
                <p className="daily--description">{day.weather[0].description}</p>
                <img src={require(`../img/${day.weather[0].icon}.png`)} 
                    alt="weather icon" />
                    <div className="daily-weather--max-min">
                    <p>
                        {day.main.temp.toFixed(1)} {SwitchUnits()}
                    </p>
                    </div>
            </div>
    )
    }
    console.log(forecast)
    
    const forecastArray = isWeeklyForecast ? 
    
    forecast.list.map((day, index) => {
        if(index === 0 || index%8 === 0) {
            return forecastHtml(day)
        } 
    })
    
    : forecast.list.map((day, index) => {
        if (index < 6) {
           return forecastHtml(day)
        }
    })

    return(
        <div className="weekly-weather-row">
            {forecastArray}
        </div>
    )
}