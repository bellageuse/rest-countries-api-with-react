import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v2/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
    };
  }, []);
  return <div></div>;
};

export default Countries;
