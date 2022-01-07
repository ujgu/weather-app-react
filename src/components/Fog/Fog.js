import React from 'react'
import './Fog.css'
import { BsCalendar2Date } from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { WiFog } from 'react-icons/wi'

export default function Clear(props) {
    const { weather } = props;
    return (
        <div className='fog'>
            {/* fog effect */}

            <div id="foglayer_01" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
            </div>
            <div id="foglayer_02" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
            </div>
            <div id="foglayer_03" className="fog">
            <div className="image01"></div>
            <div className="image02"></div>
            </div>



            {/* fog effect */}
            <div className='fog-container'>
                {/* widget */}

                <div className='fog-widget'/>

                {/* widget */}
                <h1>{weather.main.temp} ℃</h1>
                <h1>{weather.name} </h1>
                <div className='fog-info'>
                    <div>
                        <WiFog/>
                        <h3>Fog</h3>
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
