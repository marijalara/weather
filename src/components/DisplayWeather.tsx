import React from 'react';
import { WeatherData } from './Weather';
import WeatherDetails from './WeatherDetails';

type DisplayWeatherProps={
    weather: WeatherData
}

const DisplayWeather: React.FC<DisplayWeatherProps> = ({weather}) => {
    const iconsUrl=" http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"
    return (
        <div className="display">
        <div className="maincard">
            <div className="cardTitle">
                {weather.name}, {weather.sys.country}
            </div>
            <div className="date">
                {new Date().toLocaleTimeString()}
            </div>
            <h1 className="temp">
                {Math.round(weather.main.temp -273.15)} &deg;C 
            </h1>
            <div className="main">
                {weather.weather[0].main}
            </div>
            <img src={iconsUrl} className="icon" alt="img"/>
            <div className="description">
                {weather.weather[0].description}
            </div>
        </div>
        <div className="details">
            <WeatherDetails weather={weather}/>
        </div>
        </div>
    )
}

export default DisplayWeather