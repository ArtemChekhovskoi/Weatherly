import React, {useEffect, useState} from "react"
import axios from "axios"
import { weatherData } from "./weatherDataObj"
import { defaultForecast } from "./forecastData"


const CurrentWeather = React.createContext()


function GetCurrentWeather(props) {

    const [forecast, setForecast] = useState(defaultForecast)
    const [units, setUnits] = useState("metric")
    const [isWeeklyForecast, setIsWeeklyForecast] = useState(false)
    const [weatherObj, setWeatherObj] = useState(weatherData)
    const [coord, setCoord] = useState()

    function setMetric() {
        setUnits("metric")
    }

    function setImperial() {
        setUnits("imperial")
    }

    function turnWeeklyForecast() {
        setIsWeeklyForecast(true)
    }

    function turnDailyForecast() {
        setIsWeeklyForecast(false)
    }

    function newCoordinates(latitude, longitude) {
        setCoord({
            lat: latitude,
            lon: longitude
        })
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
            setCoord({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                })
            }
            )
    }, [])

    useEffect(() => {
            async function getWeather() {
                const resp = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=${units}&appid=cef03b990826db7a1adaf944e9fa85f6`)
                setWeatherObj(resp.data)
            }
            getWeather()
    }, [units, coord])

    useEffect(() => {
            async function getForecast() {
                const resp = await axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=${units}&cnt=40&appid=cef03b990826db7a1adaf944e9fa85f6`)
                setForecast(resp.data)
            }
            getForecast()
            
    }, [units, coord, isWeeklyForecast])

        return (
            <CurrentWeather.Provider value={{weather: weatherObj, forecast, setMetric, setImperial, units, newCoordinates, isWeeklyForecast, turnDailyForecast, turnWeeklyForecast}}>
                {props.children}
            </CurrentWeather.Provider>
        )
}

export {GetCurrentWeather, CurrentWeather}