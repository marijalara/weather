import React from "react";
 
const WeatherDetails=({weather}) => {
    return(
        <div className="container">
            <div className="section1">
            <table>
                <tbody>
                <tr>
                    <td>
                        <h4>Higt/Low</h4>
                    </td>
                    <td>
                        {Math.round(weather.main.temp_max -273.15)} / 
                        &nbsp;&nbsp;
                        {Math.round(weather.main.temp_min -273.15)} &deg;C 
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Humidity</h4>
                    </td>
                    <td>
                        &nbsp;&nbsp;
                        {weather.main.humidity} %
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Pressure</h4>
                    </td>
                    <td>
                        &nbsp;&nbsp;
                        {weather.main.pressure} hPa
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Visibility</h4>
                    </td>
                    <td>
                        &nbsp;&nbsp;
                        {weather.visibility /1000} km
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="section2">
                <table>
                <tbody>
                <tr>
                    <td>
                        <h4>Wind</h4>
                    </td>
                    <td>
                        &nbsp;&nbsp;
                        {weather.wind.speed} m/s
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Wind direction</h4>
                    </td>
                    <td>
                        {weather.wind.deg}&deg;C deg
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Sunrise</h4>
                    </td>
                    <td>
                        &nbsp;&nbsp;
                        {new Date(weather.sys.sunrise *1000).toLocaleTimeString()}  
                    </td>
                </tr>
                <tr>
                <td>
                    <h4>Sunset</h4>
                </td>
                    <td>
                        &nbsp;&nbsp;
                        {new Date(weather.sys.sunset *1000).toLocaleTimeString()}
                    </td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default WeatherDetails