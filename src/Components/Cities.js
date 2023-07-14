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
      cityName: "",
      population: "",
      latitude: "",
      longitude: "",
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
      url: 'https://testdatabase-392302.uc.r.appspot.com/cities?city_name=' + this.state.cityName + "&population=" + 
        this.state.population + "&latitude=" + this.state.latitude + "&longitude=" + this.state.longitude + 
        "&sort=" + this.state.sortOrder + "&search=" + this.state.searchOption,
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
      url: 'https://testdatabase-392302.uc.r.appspot.com/cities?city_name=' + this.state.cityName + "&population=" + 
        this.state.population + "&latitude=" + this.state.latitude + "&longitude=" + this.state.longitude + 
        "&sort=" + this.state.sortOrder + "&search=" + this.state.searchOption,
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

  handleCityName = (event) => {
    const city = event.target.value;
    this.setState({ cityName: city }, () => {
      this.changeAPI();
    });
  };

  handlePopulation = (event) => {
    const pop = event.target.value;
    this.setState({ population: pop }, () => {
      this.changeAPI();
    });
  };

  handleLatitude = (event) => {
    const latitude = event.target.value;
    this.setState({ latitude: latitude }, () => {
      this.changeAPI();
    });
  };

  handleLongitude = (event) => {
    const longitude = event.target.value;
    this.setState({ longitude: longitude }, () => {
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
                  <select
                    onChange={this.handleCityName}
                    className="sort-dropdownCities"
                  >
                    <option value="">City Name</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Austin">Austin</option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Charlotte">Charlotte</option>
                    <option value="Columbus">Columbus</option>
                    <option value="Dallas">Dallas</option>
                    <option value="Fort Worth">Fort Worth</option>
                    <option value="Houston">Houston</option>
                    <option value="Indianapolis">Indianapolis</option>
                    <option value="Jacksonville">Jacksonville</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="New York">New York</option>
                    <option value="Philadelphia">Philadelphia</option>
                    <option value="Phoenix">Phoenix</option>
                    <option value="Queens">Queens</option>
                    <option value="San Antonio">San Antonio</option>
                    <option value="San Diego">San Diego</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="San Jose">San Jose</option>
                    <option value="The Bronx">The Bronx</option>
                  </select>
                  <select
                    onChange={this.handlePopulation}
                    className="sort-dropdownCities"
                  >
                    <option value="">Population Filter</option>
                    <option value="900000">900000</option>
                    <option value="1000000">1000000</option>
                    <option value="1100000">1100000</option>
                    <option value="1200000">1200000</option>
                    <option value="1300000">1300000</option>
                    <option value="1400000">1400000</option>
                    <option value="1500000">1500000</option>
                    <option value="1600000">1600000</option>
                    <option value="1700000">1700000</option>
                  </select>
                  <select
                    onChange={this.handleLatitude}
                    className="sort-dropdownCities"
                  >
                    <option value="">Latitude Filter</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                  </select>
                  <select
                    onChange={this.handleLongitude}
                    className="sort-dropdownCities"
                  >
                    <option value="">Longitude Filter</option>
                    <option value="-95">-95</option>
                    <option value="-90">-90</option>
                    <option value="-85">-85</option>
                    <option value="-80">-80</option>
                    <option value="-75">-75</option>
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