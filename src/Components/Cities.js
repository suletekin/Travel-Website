import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from 'axios';

class Cities extends React.Component {

  constructor(props) {
    super(props);

    // Access props in the constructor
    console.log(props.city);

    // Initialize component state if needed
    this.state = {
      cities: [],
      error: null,
    };
  }

  changeCity = (event) => {
    event.preventDefault();
    // Handle the click event
    this.props.setCity("Austin")
    console.log(this.props.city);
  };

  componentDidMount() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://testdatabase-392302.uc.r.appspot.com/cities',
      headers: { }
    };
    axios.request(config).then(response => {
      this.setState({
        cities: response.data,
      });
    }).catch(error => {
      this.setState({
        error,
      });
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Error</h1>
          <p>{this.state.error.message}</p>
        </div>
      );
    } else {
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
              {this.state.cities.map((city, i) => (
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
                            <a href="Attractions" onClick={this.changeCity}>Attractions</a>
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
}

export default Cities;