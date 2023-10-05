import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components'
import CityComponent from './Modules/CityComponent';
import WeatherCom from './Modules/WeatherCom';

const Container=styled.div `
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow: 0 3px 6px 0 #555;
    padding: 20px 10px;
    border-radius: 4px;
    width: 380px;
    background: white;
    font-family: Montserrat;
`;

const AppLabel=styled.span`
  color: black;
   font-size: 18px;
   font-weight: bold;
`;


function Wether() {
  const [city,setCity]=useState();
  const[weather,setWeather]=useState();
  const fetchWeather=async(e)=>{
    e.preventDefault();
    const res= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=86077dbe79c4820dcbf0f35c175f50de`);
    setWeather(res.data);
  }
  return (
    <Container>
    <AppLabel>React Weather App</AppLabel>
   { weather?<WeatherCom weather={weather}/>: <CityComponent setCity={setCity} fetchWeather={fetchWeather}/>}
    {/* <WeatherCom/> */}
    </Container>
  )
}

export default Wether