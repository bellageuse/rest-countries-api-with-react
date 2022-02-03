import React, { useEffect, useState } from "react";

const url = "https://restcountries.com/v2/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);


  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <div>
      {countries.map((country) => {
        const { id } = country;

        return <article key={id}>Country data</article>;
      })}
    </div>
  );
};

export default Countries;
