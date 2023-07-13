import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";

class Attractions extends React.Component {
  
  constructor(props) {
    super(props);

    // Access props in the constructor
    console.log(props.city);

    // Initialize component state if needed
    this.state = {
      attractions: [],
      error: null,
    };
  }

  changeCity = (event) => {
    event.preventDefault();
    // Handle the click event
    const name = this.props.city;
    console.log(name);
  };

  componentDidMount() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://testdatabase-392302.uc.r.appspot.com/attractions',
      headers: { }
    };
    axios.request(config).then(response => {
      this.setState({
        attractions: response.data,
      });
    }).catch(error => {
      this.setState({
        error,
      });
    });
  }

  render() {
    return (
      <div className="backgroundAttractions">
        <br />
        <div style={{border: "10px solid white", padding: "1px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", height: "100%",}}>
        <p style={{ fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}> Discover Top-Rated Attractions!</p>
        </div>
        <br />
        <Container>
          <Row>
            {this.state.attractions.map((attraction, i) => (
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
                        <li>Rating: {attraction.Rating}</li>
                        <li>Location: {attraction.Location}</li>
                        <li>Phone Number: {attraction.PhoneNumber}</li>
                        <li>
                          <a href="Cities">City: {attraction.cityID}</a>
                        </li>
                        <li>
                          <a href="Reviews" onClick={this.changeCity}>Reviews</a>
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
}

export default Attractions;
