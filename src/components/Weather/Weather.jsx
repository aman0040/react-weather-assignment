import Loader from "../Loader/Loader";
import "./weather.css";
import { PropTypes } from "prop-types";

function Weather({ weather, location, fetching }) {
  if (location == null) {
    return (
      <div className="weather">
        <p>No Location Selected</p>
      </div>
    );
  } else {
    if (fetching) {
      return (
        <div className="weather">
          <Loader />
        </div>
      );
    } else {
      const src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
      return (
        <div className="weather">
          <h2>Weather for {location.name}</h2>
          <img src={src} alt="Weather Icon"></img>
          <p>
            {weather.main} - {weather.description}
          </p>
          <p>{weather.temperature} °C</p>
          <p>{weather.feelsLikeTemp} °C</p>
          <p>{weather.windSpeed} m/s</p>
        </div>
      );
    }
  }
}

Weather.propTypes = {
  weather: PropTypes.shape({
    main: PropTypes.string,
    description: PropTypes.string,
    temperature: PropTypes.number,
    feelsLikeTemp: PropTypes.number,
    windSpeed: PropTypes.number,
    icon: PropTypes.string,
  }),
  location: PropTypes.shape({
    id: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    country: PropTypes.string,
    name: PropTypes.string,
  }),
  fetching: PropTypes.bool,
};

export default Weather;
