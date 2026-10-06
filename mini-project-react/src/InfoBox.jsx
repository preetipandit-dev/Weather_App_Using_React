import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import TsunamiIcon from '@mui/icons-material/Tsunami';


export default function InfoBox( {info} ) {

    const INIT_URL = 
    "https://tse3.mm.bing.net/th/id/OIP.mfYQsZ8p4Pdl9ZGKDIKJ-QHaEK?r=0&pid=Api&h=220&P=0"

    const HOT_URL = "https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg"
    const COLD_URL = "https://tse3.mm.bing.net/th/id/OIP.FJuceGnQR6igrZ3mqiUp6wHaE7?r=0&pid=Api&h=220&P=0"
    const RAIN_URL = "https://tse4.mm.bing.net/th/id/OIP.TM1TiWfy4Tf2VyhZPlJszwHaE9?r=0&pid=Api&h=220&P=0"
    return (
       <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={info.humidity > 80 ? RAIN_URL:info.temp > 15 ? HOT_URL : COLD_URL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}{
                info.humidity > 80
                ? <TsunamiIcon/>
                : info.temp > 15
                ? <SunnyIcon/>
                : <AcUnitIcon/>
                }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The weather can be describe as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
       </div> 
    )
}