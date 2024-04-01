import "./searchBar.css";
import { useState } from "react";
import { PropTypes } from "prop-types";

function SearchBar(props) {
  const [input, setInput] = useState("");

  function inputChanged(ev) {
    setInput(ev.target.value);
  }

  async function submitted(ev) {
    ev.preventDefault();

    const resp = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${input}&appid=0e742b67f0b4511095e08f7cd6ca5a08`
    );
    const data = await resp.json();

    const locations = data.map((info) => {
      let location = {
        id: crypto.randomUUID(),
        lat: info.lat,
        lng: info.lon,
        country: info.country,
        name: info.name,
      };
      return location;
    });

    ev.target.reset();
    props.add(locations);
  }

  return (
    <form className="form" onSubmit={submitted}>
      <label htmlFor="loc">City, Province, Country</label>
      <input type="text" name="location" id="loc" onChange={inputChanged} required/>

      <button type="submit">Find Location</button>
    </form>
  );
}

SearchBar.propTypes = {
  add: PropTypes.func,
};

export default SearchBar;
