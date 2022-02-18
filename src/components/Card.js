import React from "react";
import "../components/Card.css";
const Card = ({ country }) => {
  return (
    <>
      <div className="card-container">
        <img src={country.flag} alt={country.name}></img>
        <div className="text-container">
          <h1>{country.name}</h1>
          <h3>
            Population: <strong>{country.population}</strong>
          </h3>
          <h3>
            Region: <strong>{country.region}</strong>
          </h3>
          <h3>
            Capital: <strong>{country.capital}</strong>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Card;
