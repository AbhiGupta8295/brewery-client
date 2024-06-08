import React, { useState } from "react";
import axios from "axios";
import BreweryCard from "./card";

const Search = () => {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breweries, setBreweries] = useState([]);

  const handleSearchByCity = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://api.openbrewerydb.org/v1/breweries?by_city=",
        {
          params: { by_city: city },
        }
      );
      setBreweries(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchByName = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://api.openbrewerydb.org/v1/breweries?by_name=",
        {
          params: { by_name: name },
        }
      );
      setBreweries(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchByType = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "https://api.openbrewerydb.org/v1/breweries?by_type=",
        {
          params: { by_type: type },
        }
      );
      setBreweries(res.data);
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      <h1>Search Breweries</h1>
      <form onSubmit={handleSearchByCity}>
        <input
          type="text"
          placeholder="Search by city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search by City</button>
      </form>
      <form onSubmit={handleSearchByName}>
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Search by Name</button>
      </form>
      <form onSubmit={handleSearchByType}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select type</option>
          <option value="micro">Micro</option>
          <option value="nano">Nano</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
          <option value="large">Large</option>
          <option value="planning">Planning</option>
          <option value="bar">Bar</option>
          <option value="contract">Contract</option>
          <option value="proprietor">Proprietor</option>
          <option value="closed">Closed</option>
        </select>
        <button type="submit">Search by Type</button>
      </form>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            <div>
              <BreweryCard brewery={brewery} />
             </div>
           </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
