import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from 'axios';
import Pagination from "./Pagination";


class Cities extends React.Component {

  constructor(props) {
    super(props);

    // Access props in the constructor
    console.log(props.city);

    // Initialize component state if needed
    this.state = {
      cities: [],
      error: null,
      filter: "",
      searchOption: "",
      sortOrder: "",
      currentPage: 1,
      citiesPerPage: 9,
    };
  }


  componentDidMount() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://testdatabase-392302.uc.r.appspot.com/cities?' + this.state.filter + "sort=" + this.state.sortOrder + "&search=" + this.state.searchOption,
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

  changeAPI() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://testdatabase-392302.uc.r.appspot.com/cities?' + this.state.filter + "sort=" + this.state.sortOrder + "&search=" + this.state.searchOption,
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

  handleSearch = (event) => {
    const search = event.target.value;
    this.setState({ searchOption: search }, () => {
      this.changeAPI();
    });
  };

  handleSortOptionChange = (event) => {
    const sortOption = event.target.value;
    this.setState({ sortOrder: sortOption }, () => {
      this.changeAPI();
    });
  };

  setCurrentPage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };


  render() {
    const indexOfLastCity = this.state.currentPage * this.state.citiesPerPage;
    const indexOfFirstCity = indexOfLastCity - this.state.citiesPerPage;
    const currentCities = this.state.cities.slice(indexOfFirstCity, indexOfLastCity);
    const totalPages = Math.ceil(this.state.cities.length / this.state.citiesPerPage);

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
              <Col>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchOption}
                    onChange={this.handleSearch}
                  />
                  <select
                    value={this.state.sortOption}
                    onChange={this.handleSortOptionChange}
                    className="sort-dropdownCities"
                  >
                    <option value="">Sort order</option>
                    <option value="latitude">Latitude</option>
                    <option value="longitude">Longitude</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              {currentCities.map((city, i) => (
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
            <Pagination
              nPages={totalPages}
              currentPage={this.state.currentPage}
              setCurrentPage={this.setCurrentPage}
            />

          </Container>
        </div>
      );
    }
  }
}

export default Cities;