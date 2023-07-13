import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";

class Reviews extends React.Component {

  constructor(props) {
    super(props);

    // Access props in the constructor
    console.log(props.attractions);

    // Initialize component state if needed
    this.state = {
      reviews: [],
      error: null,
    };
  }

  componentDidMount() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://testdatabase-392302.uc.r.appspot.com/reviews',
      headers: { }
    };
    axios.request(config).then(response => {
      this.setState({
        reviews: response.data,
      });
    }).catch(error => {
      this.setState({
        error,
      });
    });
  }

  render() {
    return (
      <div className="backgroundReviews">
        <br />
        <div style={{border: "10px solid white", padding: "1px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center",height: "100%"}}>
          <p style={{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}} > Discover Authentic Travel Experiences: User Reviews and Ratings </p>
        </div>
        <br />
        <Container>
          <Row>
            {this.state.reviews.map((review, i) => (
              <Col key={i} xs={12} sm={6} md={4}>
                <Card
                  style={{ width: "100%", margin: "20px" }}
                  border={"success"}
                  bg={"light"}
                  text={"dark"}
                >
                  <Card.Body>
                    <Card.Title>{review.name}</Card.Title>
                    <Card.Img
                      src={review.image_url}
                      style={{ width: "200px" }}
                    />
                    <Card.Text>
                      <ul>
                        <li>
                          <a href={review.Link}>Link to Review!</a>
                        </li>
                        <li>{review.rText}</li>
                        <li>Rating: {review.Rating}</li>
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
}

export default Reviews;
