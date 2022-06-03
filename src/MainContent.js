import React from "react";
import Header from "./components/Header";
import Pressure from "./components/Pressure";
import Sunrise from "./components/Sunrise";
import WeeklyWeather from "./components/WeeklyWeather";
import WindStatus from "./components/WindStatus";
import Humidity from "./components/Humidity";


export default function MainContent() {

    return(
        <div className="main-content--container">
            <Header />
            <WeeklyWeather />
            <p className="highlight">Today Highlight</p>
            <div className="today--dashboard">
            <Pressure />
            <WindStatus />
            <Sunrise />
            <Humidity />
            </div>
        </div>
    )
}