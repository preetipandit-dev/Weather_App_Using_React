import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");

    const API_KEY = "497216affe4251d662b2649d09e44d07";

    let getWeatherInfo = async () => {
    let geoResponse = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );

    let geoData = await geoResponse.json();

    console.log(geoData);
    if (geoData.length === 0) {
        console.log("City not found");
        return;
    }

    let lat = geoData[0].lat;
    let lon = geoData[0].lon;

    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();  

    
    let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    }
    console.log(result);
    return result;

    };
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();

        console.log(city);

        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)

        setCity("");
    };

    return (
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />

                <br />
                <br />

                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}