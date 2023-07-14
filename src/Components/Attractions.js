import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";

class Attractions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: [],
      error: null,
      searchCity: "Chicago",
      searchOption: "",
      sortOrder: "",
      currentPage: 1,
      citiesPerPage: 6,
    };
  }

  componentDidMount() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://testdatabase-392302.uc.r.appspot.com/attractions?cityID=" + this.state.searchCity + 
        "&search=" + this.state.searchOption + "&sort=" + this.state.sortOrder,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        this.setState({
          attractions: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
        console.log("hi");
      });
  }

  changeAPI() {
    console.log(this.state.searchCity);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://testdatabase-392302.uc.r.appspot.com/attractions?cityID=" + this.state.searchCity + 
        "&search=" + this.state.searchOption + "&sort=" + this.state.sortOrder,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        this.setState({
          attractions: response.data,

        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  handleCitySearch = (event) => {
    const searchCity = event.target.value;
    this.setState({ searchCity: searchCity }, () => {
      console.log(this.state.searchCity);
      this.changeAPI();
    });
  };

  handleSortOptionChange = (event) => {
    const sortOption = event.target.value;
    this.setState({ sortOrder: sortOption }, () => {
      console.log(this.state.searchCity);
      this.changeAPI();
    });
  };

  handleSearchOptionChange = (event) => {
    const searchOption = event.target.value;
    this.setState({ searchOption: searchOption }, () => {
      console.log(this.state.searchCity);
      this.changeAPI();
    });
  };

  setCurrentPage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const indexOfLastCity = this.state.currentPage * this.state.citiesPerPage;
    const indexOfFirstCity = indexOfLastCity - this.state.citiesPerPage;
    const currentAttractions = this.state.attractions.slice(indexOfFirstCity, indexOfLastCity);
    const totalPages = Math.ceil(this.state.attractions.length / this.state.citiesPerPage);

    return (
      <div className="backgroundAttractions">
        <br />
        <div
          style={{ border: "10px solid white", padding: "1px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center",height: "100%",}}>
          <p style={{fontSize: 50,textAlign: "center", fontWeight: "800", margin: "auto"}}>
            Discover Top-Rated Attractions!
          </p>
        </div>
        <br/>
        <Container>
          <Row>
            <Col>
              <div className="search-container">
                <input type="text"
                  placeholder="Search"
                  value={this.state.searchOption}
                  onChange={this.handleSearchOptionChange}
                />
                <select onChange={this.handleSortOptionChange} className="sort-dropdownAttractions">
                  <option value="">Sort by</option>
                  <option value="Rating">Rating</option>
                  <option value="name">Name</option>
                </select>
                <select onChange={this.handleCitySearch} className="sort-dropdownAttractions">
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
              </div>
            </Col>
          </Row>
          <Row>
            {currentAttractions.map((attraction, i) => (
              <Col key={i} xs={12} sm={6} md={4}>
                <Card style={{ width: "100%", margin: "20px" }} border={"success"} bg={"light"} text={"dark"}>
                  <Card.Body>
                    <Card.Title>{attraction.name}</Card.Title>
                    <Card.Img
                      src={attraction.image_url}
                      style={{ width: "200px" }}
                    />
                    <Card.Text>
                      <ul>
                        <li>Rating: {attraction.Rating}</li>
                        <li>Location: {attraction.Location}</li>
                        <li>Phone Number: {attraction.PhoneNumber}</li>
                        <li>
                          <a href="Cities">City: {attraction.cityID}</a>
                        </li>
                        <li>
                          <a href="Reviews" onClick={this.changeCity}>
                            Reviews
                          </a>
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

export default Attractions;

