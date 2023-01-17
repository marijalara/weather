import React from "react";
 
const WeatherDetails=({weather}) => {
    return(
        <React.Fragment>
        <div className="container">
            <div className="section1">
            <table>
                <tr>
                <div className="high-low">
                    <td>
                        <h4>Higt/Low</h4>
                    </td>
                    <td>
                        <span>
                            {Math.round(weather.main.temp_max -273.15)} / 
                            &nbsp;&nbsp;
                            {Math.round(weather.main.temp_min -273.15)} &deg;C 
                        </span>
                    </td>
                    </div>
                </tr>
                <tr>
                <div className="humidity">
                    <td>
                        <h4>Humidity</h4>
                    </td>
                    <td>
                        <span>
                            &nbsp;&nbsp;
                            {weather.main.humidity} %
                        </span>
                    </td>
                </div>
                </tr>
                <tr>
                <div className="pressure">
                    <td>
                        <h4>Pressure</h4>
                    </td>
                    <td>
                        <span>
                            &nbsp;&nbsp;
                            {weather.main.pressure} hPa
                        </span>
                    </td>
                </div>
                </tr>
                <tr>
                <div className="visibility">
                    <td>
                        <h4>Visibility</h4>
                    </td>
                    <td>
                        <snap>
                            &nbsp;&nbsp;
                            {weather.visibility /1000} km
                        </snap>
                    </td>
                </div>
                </tr>
            </table>
            </div>
            <div className="section2">
                <table>
                <div className="wind">
                    <td>
                        <h4>Wind</h4>
                    </td>
                    <td>
                        <span>
                            &nbsp;&nbsp;
                            {weather.wind.speed} m/s
                        </span>
                    </td>
                </div>
                <tr>
                <div className="wind-direction">
                    <td>
                        <h4>Wind direction</h4>
                    </td>
                    <td>
                        <span>
                            {weather.wind.deg}&deg;C deg
                        </span>
                    </td>
                </div>
                </tr>
                <tr>
                <div className="sunrise">
                    <td>
                        <h4>Sunrise</h4>
                    </td>
                    <td>
                        <span>
                        &nbsp;&nbsp;
                            {new Date(weather.sys.sunrise *1000).toLocaleTimeString()}  
                        </span>
                    </td>
                </div>
                </tr>
                <tr>
                <div className="sunset">
                    <td>
                        <h4>Sunset</h4>
                    </td>
                    <td>
                        <span>
                            &nbsp;&nbsp;
                            {new Date(weather.sys.sunset *1000).toLocaleTimeString()}
                        </span>
                    </td>
                </div>
                </tr>
                </table>
            </div>
        </div>
        </React.Fragment>
    )
}

export default WeatherDetails