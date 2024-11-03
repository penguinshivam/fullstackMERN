import SearchBox from "./SearchBox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({ info }) {
  let init_img = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let hot_img="https://media.istockphoto.com/id/495291758/photo/woman-using-water-bottle-to-cool-down.jpg?s=612x612&w=is&k=20&c=PrKtVECBDAMAdezZygZhi-456q-M2MwiN1UzfgnQ-Pc="
  let rain_img="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  let cold_img="https://plus.unsplash.com/premium_photo-1670428635685-dd49306e5622?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D "
  return (
    <div className="InfoBox">
      <div className="card">
        <Card id="card" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ?rain_img : info.temp>15 ? hot_img : cold_img}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ?<ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}
            >
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}</p>
              <p>Min Temperature={info.tempMin}&deg;C</p>
              <p>Max Temperature={info.tempMax}&deg;C</p>
              <p>
                The weather can de described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
