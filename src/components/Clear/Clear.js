import React from 'react'
import './Clear.css'
import { BsCalendar2Date, BsSun } from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'

export default function Clear(props) {
    const { weather } = props;
    return (
        <div className='clear'>
            <div className='clear-container'>
                {/* widget */}

                <div className='clear-widget'/>

                {/* widget */}
                <h1>{weather.main.temp} ℃</h1>
                <h1>{weather.name} </h1>
                <div className='clear-info'>
                    <div>
                    <BsSun/>
                    <h3>Clear</h3>
                    </div>
                    <div>    
                        <TiWeatherPartlySunny/>
                        <h4>{weather.weather.map((data) => data.description).join(", ").toUpperCase()}</h4>
                    </div>
                    <div>
                        <BsCalendar2Date/>
                        <p>{new Date(weather.dt * 1000).toLocaleDateString()} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
