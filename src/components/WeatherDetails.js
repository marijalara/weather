import React from "react";
 
const WeatherDetails=({weather}) => {
    return(
        <div className="container">
            <section className="section1">
            <div className="high-low">
            <h4>Higt/Low
                &nbsp;&nbsp;
                {Math.round(weather.main.temp_max -273.15)} / 
                &nbsp;&nbsp;
                {Math.round(weather.main.temp_min -273.15)} &deg;C 
            </h4>
            </div>
            <div className="humidity">
            <h4>Humidity
                &nbsp;&nbsp;
                {weather.main.humidity} %
            </h4>
            </div>
            <div className="pressure">
                <h4>Pressure
                &nbsp;&nbsp;
                {weather.main.pressure} hPa
                </h4>
            </div>
            <div className="visibility">
                <h4>Visibility
                    &nbsp;&nbsp;
                    {weather.visibility /1000} km
                </h4>
            </div>
            </section>
            <section className="section2">
                <div className="wind">
                    <h4>Wind
                    &nbsp;&nbsp;
                    {weather.wind.speed} m/s
                    </h4>
                </div>
                <div className="wind-direction">
                    <h4>Wind direction
                        &nbsp;&nbsp;
                        {weather.wind.deg} &deg;C deg
                    </h4>
                </div>
                <div className="sunrise">
                    <h4>Sunrise
                    &nbsp;&nbsp;
                    {new Date(weather.sys.sunrise *1000).toLocaleTimeString()}
                    </h4>
                </div>
                <div className="sunset">
                    <h4>Sunset
                        &nbsp;&nbsp;
                        {new Date(weather.sys.sunset *1000).toLocaleTimeString()}
                    </h4>
                </div>
            </section>
        </div>
    )
}

export default WeatherDetails