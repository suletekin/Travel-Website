import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import data from "./Data/attractions_Boston.json";

function Attractions() {
  return (
    <div className="backgroundAttractions">
      <br />
      <div style={{border: "10px solid white", padding: "1px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", height: "100%",}}>
       <p style={{ fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}> Discover Top-Rated Attractions!</p>
      </div>
      <br />
      <Container>
        <Row>
          {data.map((attraction, i) => (
            <Col key={i} xs={12} sm={6} md={4}>
              <Card
                style={{ width: "100%", margin: "20px" }}
                border={"success"}
                bg={"light"}
                text={"dark"}
              >
                <Card.Body>
                  <Card.Title>{attraction.name}</Card.Title>
                  <Card.Img src={attraction.image_url} style={{ width: "200px" }} />
                  <Card.Text>
                    <ul>
                      <li>Rating: {attraction.rating}</li>
                      <li>Price: {attraction.price}</li>
                      <li>Location: {attraction.location.address1}</li>
                      <li>Phone Number: {attraction.phone}</li>
                      <li>
                        <a href="Cities">City: {attraction.location.city}</a>
                      </li>
                      <li>
                        <a href="Reviews">Ratings: {attraction.rating}</a>
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

export default Attractions;
