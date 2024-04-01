import React, { useEffect, useState } from 'react';
import axios from "axios";
import './wdr.css'
const Physical = () => {
  const [city , setCity] = useState("");
  const [weatherDetails , setWeatherDetails] = useState();
  const onClikckHandler = async () => {
    const apiKey = '7d24ac9a0011462c9f9180843242603';
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`;
    const result = await axios.get(url);
    setWeatherDetails(result.data.forecast.forecastday); 
    console.log(result.data.forecast.forecastday)
  }
  return (
    <div className='container'>
      <div className='weather'>
      <input type="text" placeholder='Enter the city name' onChange={(e)=> setCity(e.target.value)}/>
       <button className='btn' onClick={onClikckHandler}>Search</button>
      </div>
      {
        weatherDetails?.map(ele => {
          return <div className='weather_data'><br/>
          {<img src={ele.day.condition.icon} alt="day.condition.text" />}<br/>
          {ele.day.avgtemp_c}°C,<br/>
          {ele.day.avghumidity} % humidity,<br/>
          {ele.day.maxwind_kph} km/h<br/>
          </div>
        })
      }
    </div>
  )
}
export default Physical;