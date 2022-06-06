import React, {useContext} from "react";
import { CurrentWeather } from "../Context";

export default function Header() {
const {setMetric, setImperial, units} = useContext(CurrentWeather)

const currentUnitsStyle = {backgroundColor: "#5B9BFC", color: "#fff"}

    return(
        <div className="header--main-container">
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