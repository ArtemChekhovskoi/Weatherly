import React, {useContext} from "react"
import { CurrentWeather } from "../Context"
import SwitchUnits from "../utils/switchUnits"
import { getTime } from "../utils/getTime"
import {nanoid} from "nanoid"
import getWindSpeed from "../utils/getWindSpeed"


export default function WeeklyWeather() {

   
    const {forecast, isWeeklyForecast, turnWeeklyForecast, turnDailyForecast, units} = useContext(CurrentWeather)
    const myRef = React.useRef()
    
    const currentForecastStyle = {
        color: "#5B9BFC", 
        backgroundColor: "#fafafa",
        borderBottom: "1px solid #fafafa",
    }
    
    const executeScroll = () => myRef.current.scrollIntoView()     

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
        if (timestamp === 0) {
            return " "
        } else {
            return days[currentDay.getDay()]
        }
    }

    function forecastHtml(day) {
        return(
            <div key={nanoid()} className="daily-weather--main-container container">
                <p className="daily--title">{getCorrectDay(day.dt_txt)}, {getTime(day.dt)}</p>
                <p className="daily--description">{day.weather[0].description}</p>
                <img src={require(`../img/${day.weather[0].icon}.png`)} 
                    alt="weather icon" />
                    <div className="daily-weather--max-min">
                    <p>
                        {day.main.temp.toFixed(1)} {SwitchUnits()}
                    </p>
                    <p className="daily--description">
                        {getWindSpeed(day.wind.speed, units)}
                    </p>
                    </div>
            </div>
    )
    }
   
    
    const weeklyArray =  forecast.list.map((day, index) => {
        if(index === 0 || index%8 === 0) {
            return forecastHtml(day)
        } 
    })
    
    const dayArray = forecast.list.map((day, index) => {
        if (index < 6) {
           return forecastHtml(day)
        }
    })

    return(
        <div className="weekly-weather--main-container">
            <div className="header--today-week" ref={myRef} onClick={executeScroll}>
                <a 
                style={isWeeklyForecast ? {} : currentForecastStyle}
                onClick={turnDailyForecast}
                href="#forecast-container">Today</a>
                <a style={isWeeklyForecast ? currentForecastStyle : {}}
                onClick={turnWeeklyForecast}
                href="#forecast-container">5 Days</a>
            </div>
            <div className="weekly-weather-row">
                {isWeeklyForecast ? weeklyArray : dayArray}
            </div>
        </div>
    )
}