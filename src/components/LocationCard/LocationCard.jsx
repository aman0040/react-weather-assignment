import "./locationCard.css";
import { PropTypes } from "prop-types";

function LocationCard({ loc, remove, getWeather }) {
  function buttonClicked(ev) {
    ev.stopPropagation();
    remove(loc);
  }

  function cardSelected() {
    getWeather(loc);
  }

  return (
    <div className="locationCard" onClick={cardSelected}>
      <p>{loc.name}</p>
      <p>{loc.country}</p>
      <button onClick={buttonClicked}>Remove</button>
    </div>
  );
}

LocationCard.propTypes = {
  loc: PropTypes.shape({
    id: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
    country: PropTypes.string,
    name: PropTypes.string,
  }),
  remove: PropTypes.func,
  getWeather: PropTypes.func,
};

export default LocationCard;
