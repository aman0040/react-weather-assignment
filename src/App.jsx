import "./App.css";
import Header from "./components/Header/Header.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LocationBar from "./components/LocationBar/LocationBar.jsx";
import Weather from "./components/Weather/Weather.jsx";
import FeedbackBar from "./components/FeedbackBar/FeedbackBar.jsx";
import { useState } from "react";

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  function addLocation(data) {
    if (data.length == 0) {
      setErrorMessage("No Matching Locations");
    } else {
      if (locations.length < 5) {
        setLocations([...data, ...locations]);
      } else {
        setErrorMessage(
          "You have the maximum of 5 locations. Remove one before adding another"
        );
      }
    }
  }

  function removeLocation(data) {
    setLocations(locations.filter((location) => location != data));
  }

  async function getWeather(data) {
    setSelectedLocation(data);

    setIsFetching(true);
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lng}&units=metric&appid=0e742b67f0b4511095e08f7cd6ca5a08`
    );
    const weatherJson = await resp.json();
 
    setWeather({
      main: weatherJson.weather[0].main,
      description: weatherJson.weather[0].description,
      temperature: weatherJson.main.temp,
      feelsLikeTemp: weatherJson.main.feels_like,
      windSpeed: weatherJson.wind.speed,
      icon: weatherJson.weather[0].icon,
    });
    setIsFetching(false);
  }

  return (
    <div className="App">
      <Header />
      <SearchBar add={addLocation} />
      <FeedbackBar message={errorMessage} setMessage={setErrorMessage} />
      <LocationBar locations={locations} remove={removeLocation} getWeather={getWeather} />
      <Weather weather={weather} location={selectedLocation} fetching={isFetching}/>
    </div>
  );
}

export default App;
