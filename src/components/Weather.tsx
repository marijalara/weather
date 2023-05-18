import React, {useState} from 'react';
import DisplayWeather from './DisplayWeather';

interface Text {
    city: string;
    country: string;
}

export interface WeatherData {
    name: string;
    sys: { country: string, sunrise: number; sunset: number };
    main: { temp: number; temp_max: number; temp_min: number; pressure: number; humidity: number };
    visibility: number;
    weather: { main: string; description: string; icon: string }[];
    wind: { speed: number; deg: number };
    result?: any 
    setWeather: React.Dispatch<React.SetStateAction<WeatherData>>
}

const Weather = () => {
    const key="3b992af8e16ed54f5a57236db77f52e9"
    const [text, setText]=useState<Text>({
        city: '',
        country: ''
    })
    const [weather, setWeather]=useState<Partial<WeatherData>>({})

    const handlerSubmit=(e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault()
    }

    const handlerChange=(e: React.ChangeEvent<HTMLInputElement>) => {
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
    return (
        <div className='weather'>
            <h2 className='title'>Weather App</h2>
            <form className='form' onSubmit={handlerSubmit}>
                <input 
                    name='city'
                    type='text'
                    placeholder='City'
                    value={text.city}
                    onChange={handlerChange}
                />
                &nbsp;&nbsp;
                <input 
                    name='country'
                    type='text'
                    placeholder='Country'
                    value={text.country}
                    onChange={handlerChange}
                />
                &nbsp;&nbsp;
                <button onClick={handleClick} className='btn'>Submit</button>
            </form>
            {weather.result !== undefined ? (
                <div>
                    <DisplayWeather weather={weather.result}/>
                </div>
            ): null}
        </div>
    )
}

export default Weather