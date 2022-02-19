import React from "react";
import "../components/Card.css";
const Card = ({ country }) => {
  return (
    <>
      <div className="card-container">
        <img src={country.flag} alt={country.name}></img>
        <div className="text-container">
          <h1 className="country-name-header">{country.name}</h1>
          <div className="details">
            <h3 className="details-header">
              Population: <strong>{country.population}</strong>
            </h3>
            <h3 className="details-header">
              Region: <strong>{country.region}</strong>
            </h3>
            <h3 className="details-header">
              Capital: <strong>{country.capital}</strong>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
