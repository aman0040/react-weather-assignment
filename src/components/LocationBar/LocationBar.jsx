import "./locationBar.css";
import LocationCard from "../LocationCard/LocationCard";
import { PropTypes } from "prop-types";

function LocationBar({ locations, remove, getWeather }) {
  const items = locations.map((loc) => (
    <LocationCard
      loc={loc}
      remove={remove}
      key={loc.name}
      getWeather={getWeather}
    />
  ));

  if (locations == undefined || locations == null || locations.length == 0) {
    return (
      <div className="locationBar">
        <p>No locations added yet.</p>
      </div>
    );
  } else {
    return <div className="locationBar">{items}</div>;
  }
}

LocationBar.propTypes = {
  locations: PropTypes.array,
  remove: PropTypes.func,
  getWeather: PropTypes.func,
};

export default LocationBar;
