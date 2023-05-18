import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";

const Weather=() => {
    const key= "3b992af8e16ed54f5a57236db77f52e9"

    const [text, setText]=useState({
        city: '',
        country: ''
    })
    const [weather, setWeather]=useState({})

    const handlerSubmit=(e) => {
        e.preventDefault()
    }
    const handlerChange=(e) => {
        const {name, value}=e.target
        setText({
            ...text,
            [name] : value
        })
    }
    const handleClick=async() => {
        if(text.city==='') {
            alert('Add city or country')
        } else {
        const result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text.city},${text.country}&APPID=${key}`)
        .then((res) =>res.json())
        .then((result) => result)
            setWeather({result : result})
        }
    }
    
    return(
        <div className="weather">
            <h2 className="title">Weather App</h2>
            <form className="form" onSubmit={handlerSubmit}>
                <input 
                    name="city"
                    type="text" 
                    placeholder="City"
                    value={text.city}
                    onChange={handlerChange}
                />
                &nbsp;&nbsp;
                <input 
                    name="country"
                    type="text" 
                    placeholder="Country"
                    value={text.country}
                    onChange={handlerChange}
                />
                &nbsp;&nbsp;
                <button onClick={handleClick} className="btn">Submit</button>
            </form>
            {weather.result !== undefined ? (
                <div>
                    <DisplayWeather weather={weather.result}/>
                </div>
            ) : null}
        </div>
    )
}

export default Weather