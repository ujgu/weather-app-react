import React from 'react'
import './Rain.css'
import { BsCalendar2Date, BsCloudRain } from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'

export default function Clear(props) {
    const { weather } = props;
    return (
        <div className='rain'>
            {/* background */}
            
           <div className="rains"/>

            {/* background */}
            <div className='rain-container'>
                {/* widget */}

                <div className='rain-widget'/>

                {/* widget */}
                <h1>{weather.main.temp} ℃</h1>
                <h1>{weather.name} </h1>
                <div className='rain-info'>
                    <div>
                        <BsCloudRain/>
                        <h3>Rain</h3>
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
