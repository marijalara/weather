import React from "react";

const DisplayWeather=({weather}) => {
    const iconsUrl=" http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"
   console.log(weather)
    return(
        <div className="maincard">
            <span className="cardTitle">
                {weather.name}, {weather.sys.country}
            </span>
            <br />
            <span className="date">
                {new Date().toLocaleTimeString()}
            </span>
            <h1>
                {Math.round(weather.main.temp -273.15)} &deg;C 
            </h1>
            <span>
                {weather.weather[0].main}
            </span>
            <img src={iconsUrl} className="icon" alt="img"/>
        </div>
    )
}

export default DisplayWeather