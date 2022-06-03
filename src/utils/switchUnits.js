import React, { useContext } from "react"
import { CurrentWeather } from "../Context"

export default function SwitchUnits() {
    const {units} = useContext(CurrentWeather)
    return units === "metric" ? <span><sup>o</sup> C</span> : <span> F</span>
}