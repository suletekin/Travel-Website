import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import data from "./Data/Boston/6aQ3FGZYJ506O1qHQUvC5Q_boston-tea-party-ships-and-museum-boston_reviews.json";

function Reviews() {
  return (
    <div className="backgroundReviews">
      <br />
      <div style={{border: "10px solid white", padding: "1px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center",height: "100%"}}>
        <p style={{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}} > Discover Authentic Travel Experiences: User Reviews and Ratings </p>
      </div>
      <br />
      <Container>
        <Row>
          {data.map((review, i) => (
            <Col key={i} xs={12} sm={6} md={4}>
              <Card
                style={{ width: "100%", margin: "20px" }}
                border={"success"}
                bg={"light"}
                text={"dark"}
              >
                <Card.Body>
                  <Card.Title>{review.user.name}</Card.Title>
                  <Card.Img
                    src={review.user.image_url}
                    style={{ width: "200px" }}
                  />
                  <Card.Text>
                    <ul>
                      <li>
                        <a href={review.url}>Link to Review!</a>
                      </li>
                      <li>{review.text}</li>
                      <li>Rating: {review.rating}</li>
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

export default Reviews;
