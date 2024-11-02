import SearchBox from "./SearchBox";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox(){
    let init_img=""
    let info={
        city:"tokyo",
        feelsLike:16.08,
        humidity: 85,
        temp: 16.19,
        tempMax: 17.59,
        tempMin: 14.78,
        weather: "overcast clouds"
        
    }
    return(
        <div className="InfoBox">
            <h1>Weather info - {info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature={info.temp}&deg;C</p>
                    <p>Humidity={info.humidity}</p>
                    <p>Min Temperature={info.tempMin}&deg;C</p>
                    <p>Max Temperature={info.tempMax}&deg;C</p>
                    <p>The weather can de described as <i>{info.weather}</i>and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}