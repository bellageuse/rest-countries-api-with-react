import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./Countries.css";
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
          <Container fluid>
            <Row xs={1} md={2} lg={5} className="g-4">
              {countries.map(({ country, numericCode }) => (
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={flag} />
                    <Card.Body>
                      <Card.Title>
                        Country:
                        {name}
                      </Card.Title>
                      <Card.Text>
                        Capital:
                        {capital}
                      </Card.Text>
                      <Card.Text>
                        Region:
                        {region}
                      </Card.Text>
                      <Card.Text>
                        Population:
                        {population}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Countries;
