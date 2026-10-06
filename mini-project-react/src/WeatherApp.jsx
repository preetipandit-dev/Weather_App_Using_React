import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
            city:"Delhi",
            feelsLike:28.34,
            humidity:58,
            temp:27.33,
            tempMax:27.33,
            tempMin:27.33,
            weather:"clear sky"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App By Sigma</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}