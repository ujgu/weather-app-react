import React from 'react'
import './Snow.css'
import { BsCalendar2Date } from 'react-icons/bs'
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { BsSnow } from 'react-icons/bs'

export default function Clear(props) {
    const { weather } = props;
    return (
        <div className='snow'>
            {/* background */}
            <div className="snowflakes" aria-hidden="true">
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                 <div className="snowflake">
                    ❅
                </div>
                
            </div>
          

            {/* background */}
            <div className='snow-container'>
                {/* widget */}

                <div className='snow-widget'/>

                {/* widget */}
                <h1>{weather.main.temp} ℃</h1>
                <h1>{weather.name} </h1>
                <div className='snow-info'>
                    <div>
                        <BsSnow/>
                        <h3>Snow</h3>
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
