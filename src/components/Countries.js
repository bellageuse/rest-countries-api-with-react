import React, { useEffect, useState } from "react";


import Card from "./Card";
import "./Countries.css";
const url = "https://restcountries.com/v2/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountryData();
  }, []);
  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  return (
    <div className="container">
      {countries.map((country) => {
        return <Card key={country.alpha3code} country={country} />;
      })}
    </div>
  );
};

export default Countries;
