import React, {useContext} from "react";
import { CurrentWeather } from "../Context";

export default function Pressure() {

    const {weather, units} = useContext(CurrentWeather)
    
 
        
 
    return(
     <div className="pressure-main-container container today-dashboard">
         <p className="dashboard-title">
             Pressure
         </p>
         <div className="pressure--pressure-graide">
            <div className="pressure-pressure-elements ">
                <p className="title">
                    {(weather.main.pressure / 1.333).toFixed(1)} 
                </p>
                <span className="wind--subtitle">
                {units === "metric" ? <span>mmHg</span> : <span>mBar</span>}
                    
                </span>
            </div>
            <div>
                <div className="pressure--slider">
                    <div className="pressure-circle" style={{marginTop: `${weather.main.pressure / 7}%`}}>

                    </div>
                </div>
            </div>
         </div>
         
     </div>
 )
}