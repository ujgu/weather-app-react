import AccessWaiting from "./AccessWaiting/AccessWaiting";
import Clear from "./Clear/Clear";
import Clouds from "./Clouds/Clouds";
import Rain from "./Rain/Rain";
import Fog from "./Fog/Fog";
import Snow from "./Snow/Snow";


const Weather = (props) => {
  const { weather } = props;

  if (!weather) {
    return <AccessWaiting />;
  }
  
  //  return <Clouds weather={weather}/>;
  if (weather.weather[0].main === "Clear") {
    return <Clear weather={weather} />;
  } 
  if (weather.weather[0].main === "Clouds") {
    return <Clouds weather={weather} />;
  }
  if (weather.weather[0].main === "Rain") {
    return <Rain weather={weather} />;
  }
  if (weather.weather[0].main === "Fog") {
    return <Fog weather={weather} />;
  }
  if (weather.weather[0].main === "Snow") {
    return <Snow weather={weather} />;
  }
};

export default Weather;
