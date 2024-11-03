import { TextField, Button } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let[error,setError] =useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_key = "6b9405c0725734518a0d74e8c7c2ce64";
  let getWeatherInfo = async () => {
    try{
        let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_key}&units=metric`
    );
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    }catch (err){
        throw err;
    }
}


  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
    setError(false);
    event.preventDefault();
    console.log(city);
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
    }
    catch(err){
        setError(true)
    }
  };
  return (
    <div className="SearchBox">
      {/* <h3>Search for the weather</h3> */}
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
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such palce exist</p>}
      </form>
    </div>
  );
}
