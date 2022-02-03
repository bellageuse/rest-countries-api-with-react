import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
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
        const { flag, capital, numericCode, region, name, population } =
          country;

        return (
          <Row style={{ display: "grid" }}>
            <Col xs={1} md={2} xl={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={flag} />
                <Card.Body>
                  <Card.Title>
                    <span>Country:</span>
                    {name}
                  </Card.Title>
                  <Card.Text>
                    <span>Capital:</span>
                    {capital}
                  </Card.Text>
                  <Card.Text>
                    <span>Region:</span>
                    {region}
                  </Card.Text>
                  <Card.Text>
                    <span>Population:</span>
                    {population}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Countries;
