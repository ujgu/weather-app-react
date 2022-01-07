import React from 'react'
import './Clouds.css'
import { BsCalendar2Date } from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { WiCloudy } from 'react-icons/wi'

export default function Clear(props) {
    const { weather } = props;
    return (
        <div className='clouds'>
            {/* background */}
           
           <div className="cloud"/>

            {/* background */}
            <div className='clouds-container'>
                {/* widget */}

                <div className='clouds-widget'/>

                {/* widget */}
                <h1>{weather.main.temp} ℃</h1>
                <h1>{weather.name}</h1>
                <div className='clouds-info'>
                    <div>
                        <WiCloudy/>
                        <h3>Clouds</h3>
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
