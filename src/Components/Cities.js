import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";

class Cities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      filteredCities: [],
      error: null,
      searchCity: "",
      sortOption: "",
      sortOrder: "",
    };
  }

  changeCity = (event) => {
    event.preventDefault();
    this.props.setCity("Austin");
  };

  componentDidMount() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://testdatabase-392302.uc.r.appspot.com/cities",
      headers: {},
    };
    axios
      .request(config)
      .then((response) => {
        this.setState({
          cities: response.data,
          filteredCities: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  handleCitySearch = (event) => {
    const searchCity = event.target.value.toLowerCase();

    this.setState((prevState) => {
      const filteredCities = prevState.cities.filter((city) =>
        city.name.toLowerCase().includes(searchCity)
      );

      return {
        filteredCities,
        searchCity,
      };
    });
  };

  handleSortOptionChange = (event) => {
    const sortOption = event.target.value;
    this.setState({ sortOption });
    this.sortCities(sortOption, this.state.sortOrder);
  };

  handleSortOrderChange = (event) => {
    const sortOrder = event.target.value;
    this.setState({ sortOrder });
    this.sortCities(this.state.sortOption, sortOrder);
  };

  sortCities = (sortOption, sortOrder) => {
    let sortedCities = [...this.state.filteredCities];

    sortedCities.sort((a, b) => {
      let aValue, bValue;

      if (sortOption === "population") {
        aValue = a.population;
        bValue = b.population;
      } else if (sortOption === "latitude") {
        aValue = a.latitude;
        bValue = b.latitude;
      } else if (sortOption === "longitude") {
        aValue = a.longitude;
        bValue = b.longitude;
      }

      if (aValue < bValue) {
        return sortOrder === "asc" ? -1 : 1;
      } else if (aValue > bValue) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });

    this.setState({ filteredCities: sortedCities });
  };

  render() {
    const { filteredCities, searchCity, sortOption, sortOrder } = this.state;

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
            style={{
              border: "10px solid white",
              padding: "1px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <p
              style={{
                fontSize: 50,
                textAlign: "center",
                fontWeight: "800",
                margin: "auto",
              }}
            >
              Discover Top-Rated Cities!
            </p>
          </div>
          <br />
          <Container>
            <Row>
              <Col>
                <div className="search-container">
                  <input type="text" placeholder="Search by City" value={searchCity} onChange={this.handleCitySearch}/>
                  <select value={sortOption} onChange={this.handleSortOptionChange} className="sort-dropdownCities">
                    <option value="">Sort by</option>
                    <option value="population">Population</option>
                    <option value="latitude">Latitude</option>
                    <option value="longitude">Longitude</option>
                  </select>
                  <select value={sortOrder} onChange={this.handleSortOrderChange} disabled={!sortOption} className="sort-dropdownCities">
                    <option value="">Sort order</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              {filteredCities.map((city, i) => (
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
                            <a href="Attractions" onClick={this.changeCity}>
                              Attractions
                            </a>
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
