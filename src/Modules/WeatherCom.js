import React from 'react'
import styled from 'styled-components'

export const WeatherInfoIcons={
  sunset:'./temp.svg',
  sunrise:'./temp.svg',
  humidity:'./humidity.svg',
  wind:'./wind.svg',
  pressure:'./pressure.svg',


}

const WeatherCondition=styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  width: 380px;
   justify-content: space-between;
  margin: 30px auto;
`;
const Condition=styled.span`
margin: 20px auto;
font-size: 14px;
  & span{
    font-size: 28px;
  }
`;
const WeatherLogo=styled.img`
 width: 100px;
  height: 100px;
  margin:5px auto;
  
`;
const Location=styled.span`
font-size: 28px;
  font-weight: bold;
  
`;
const WeatherInfo=styled.span`
font-size: 14px;
  font-weight: bold;
  margin:20px 25px 10px;
  text-align:start;
  width:90%
  
`;
const WeatherInfoCon=styled.div`
display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  
`;

const WeatherInfoCom=(props)=>{
  return(
    <InfoCon>
      <InfoIcon src={WeatherInfoIcons[props.name]}/>
      <InfoLable>
         {props.value}
         <span>{props.name}</span>
      </InfoLable>
    </InfoCon>
  )
}
const InfoCon=styled.div`
display: flex;
  margin:5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
 
  
`;
const InfoIcon=styled.img`

  width: 36px;
  height:36px;
 
  
`;
const InfoLable=styled.span`
  display:flex;
  flex-direction: column;
  font-size: 14px;
  margin:15px;

  & span {
    font-size: 12px;
    text-tranform:capitalize;
  }

`
function WeatherCom(props) {
  const {weather}=props;
  const isDay=weather?.weather[0].icon?.includes('d');
  const getTime=(timestamp)=>{
    return `${new Date(timestamp*1000).getHours()}:${new Date(timestamp*1000).getMinutes()}`;

  }
  return (
    <>
        <WeatherCondition>
            <Condition><span>{`${Math.floor(weather?.main?.temp-273)}C`}</span> {`|${weather?.weather[0].description}`}</Condition>
            <WeatherLogo src='./perfect-day.svg'/>
        </WeatherCondition>
        <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
        <WeatherInfo>Weather Info</WeatherInfo>
        <WeatherInfoCon>
          <WeatherInfoCom name={isDay?"sunset":"sunrise"} value={getTime(weather?.sys[isDay?"sunset":"sunrise"])}/>
          <WeatherInfoCom name='humidity' value={weather?.main?.humidity}/>
          <WeatherInfoCom name='wind' value={weather?.wind?.speed}/>
          <WeatherInfoCom name='pressure' value={weather?.main?.pressure}/>
        </WeatherInfoCon>

    </>
  )
}

export default WeatherCom;