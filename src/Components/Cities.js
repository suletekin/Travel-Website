import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import data from "./Data/cities.json";

function Cities() {
  return (
    <div className="backgroundCities">
      <br />
      <div
        style={{border: "10px solid white",padding: "1px", backgroundColor: "white", display: "flex", alignItems: "center",justifyContent: "center", height: "100%"}}>
        <p style={{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}} >Discover Top-Rated Cities!</p>
      </div>
      <br/>
      <Container>
        <Row>
          {data.map((city, i) => (
            <Col key={i} xs={12} sm={6} md={4}>
              <Card
                style={{ width: "100%", margin: "20px" }}
                border={"success"}
                bg={"light"}
                text={"dark"}
              >
                <Card.Body>
                  <Card.Title>{city.name}</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Population: {city.population}</li>
                      <li>Latitude: {city.latitude}</li>
                      <li>Longitude: {city.longitude}</li>
                      <li>
                        <a href="Attractions">Attractions</a>
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cities;
