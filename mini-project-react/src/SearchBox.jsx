import { TextField,Button } from "@mui/material";
import "./SearchBox.css"
import { useState } from "react";

export default function SearchBox() {
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_key="6b9405c0725734518a0d74e8c7c2ce64"
    let getWeatherInfo=async () => {
        let response=await fetch (`${API_URL}?q=${city}&appid=${API_key}&units=metric`)
        let jsonResponse=await response.json();
        console.log(jsonResponse);     
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description
        }
        console.log(result);
        
    }

    let [city,setCity]=useState("");

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }
  return (
    <div className="SearchBox" >

      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required         
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit" >Search</Button>
      </form>
    </div>
  );
}
