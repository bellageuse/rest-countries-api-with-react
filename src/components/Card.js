import React from "react";

const Card = ({ country }) => {
  return (
    <>
      <div className="grid">
        <img src={country.flag} alt={country.name}></img>
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
    </>
  );
};

export default Card;
