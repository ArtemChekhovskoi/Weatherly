import React, { useContext } from "react";
import { CurrentWeather } from "../Context";
import searchIcon from "../img/searchIcon.svg";
import okEmoji from "../img/1200px-Emoji_u1f44c.svg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {getTime, getDayOfTheWeek} from "../utils/getTime";
import windGeo from "../img/windGeo.svg"
import SwitchUnits from "../utils/switchUnits";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";
import RenderMap from "./GoogleMap.js";


export default function Sidebar(props) {
    const {weather, newCoordinates} = useContext(CurrentWeather)
    const [address, setAddress] = React.useState("");
    const [isMapShown, setIsMapShown] = React.useState(false)

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);

    newCoordinates(latLng.lat, latLng.lng)
    console.log(latLng)
  };

  function ShowMap() {
    return (
    <div className="map-popup">
        <RenderMap hideMap={() => setIsMapShown(prevState => !prevState)}/>
    </div>
    )
  }


    return(
        <div className={`sidebar--main-container`}>
            
            <div className="sidebar--search-container">
                <img className="sidebar--search-icon" src={searchIcon} alt="search-icon"/>
                <div>
                    
                    <PlacesAutocomplete
                        value={address}
                        onChange={setAddress}
                        onSelect={handleSelect}
                        
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            
                        <div>
                            <input {...getInputProps({ placeholder: "Type your city or district" })} />
                            <div className="sidebar--suggestions">
                            
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map(suggestion => {
                                const style = {
                                backgroundColor: suggestion.active ? "rgba(240, 240, 240, .9)" : "rgba(255, 255, 255, .9)",
                                fontSize: "1rem",
                                fontWeight: 500,
                                padding: ".3rem 1rem .3rem 1rem"
                                

                                };

                                return (
                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                    {suggestion.description}
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        )}
                    </PlacesAutocomplete>
                </div>
            </div>

            <div className="sidebar--location" onClick={() => setIsMapShown(prevState => !prevState)}>
                <div className="sidebar--location-text">
                <img className="sidebar--geo-icon" src={windGeo} alt="geo icon"/>
                <p>
                    {weather.name} {`${weather.sys.country ? ", " + weather.sys.country : ""}`} 
                </p>
                </div>
            </div>
            {isMapShown ? <ShowMap /> : ""}

            <img 
                src={require(`../img/${weather.weather[0].icon}.png`)} 
                className="sidebar--main-img" alt="main weather icon" />
            <p className="sidebar--img-description">{weather.weather[0].description}</p>
            <h2 className="sidebar--title title">
                {weather.main.temp.toFixed(1)}
                {SwitchUnits()}
            </h2>
            <p className="sidebar--subtitle">
               on {getDayOfTheWeek(weather.dt)}<span>{getTime(weather.dt)}</span>
            </p>
            <div className="sidebar--rain-chanse">
                <img src={okEmoji} alt="weather icon" className="sidebar--ok-emoji"/>
                <p className="sidebar-paragraph">
                Feels like {weather.main.feels_like.toFixed(1)}{SwitchUnits()}
                </p>
            </div>
            <div className="sidebar--allday-weather-container">
                
                <p className="sidebar-paragraph">
                    <FontAwesomeIcon icon={faArrowUp} /> 
                    max: {weather.main.temp_max.toFixed(1)}{SwitchUnits()} 
                </p> 
                <p className="sidebar-paragraph">
                    <FontAwesomeIcon icon={faArrowDown} /> 
                    min: {weather.main.temp_min.toFixed(1)}{SwitchUnits()}
                </p>
                
                
            </div>
            
            
        </div>
    )
}


