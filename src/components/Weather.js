import React, { useState } from "react";

const Weather=() => {
    const [text, setText]=useState({
        city: '',
        country: ''
    })

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
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Weather