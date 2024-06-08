import { React, useState } from "react";
import axios from "axios";
import BreweryInfo from "./breweryInfo";
import Saved from "./saved";

const BreweryCard = ({ brewery }) => {
  const [info, setInfo] = useState(null);
  const [saved, setSaved] = useState();

  const breweryId = brewery.id;

  const handleMoreDetails = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.openbrewerydb.org/v1/breweries/${breweryId}`
      );
      setInfo(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShowReviews = async (e) => {
    e.preventDefault();
    try {
      const link = `/saved/reviews/${breweryId}`;
      // console.log(link);
      const res = await axios.get(link);
      // console.log(res.data);
      setSaved(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{brewery.name}</h3>
      <p>
        {brewery.city}, {brewery.state}
      </p>
      <p>{brewery.address}</p>
      <p>Phone: {brewery.phone}</p>
      <p>
        Website:{" "}
        <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
          {brewery.website_url}
        </a>
      </p>
      <button onClick={handleMoreDetails}> More Details</button>
      {info && <BreweryInfo info={info} id={brewery.id} />}
      <button onClick={handleShowReviews}> Show Reviews</button>
      {saved && (
        <ul>
          {saved.map((save) => (
            <li key={save._id}>
              <div>
                <Saved info={save} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BreweryCard;
