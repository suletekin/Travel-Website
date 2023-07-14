import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";

class Attractions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: [],
      filteredAttractions: [],
      error: null,
      searchCity: "",
      sortOption: "",
      sortOrder: "",
      currentPage: 1,
      attractionsPerPage: 6, // Set the number of attractions to display per page
    };
  }

  componentDidMount() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://testdatabase-392302.uc.r.appspot.com/attractions",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        this.setState({
          attractions: response.data,
          filteredAttractions: response.data,
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
      const filteredAttractions = prevState.attractions.filter((attraction) =>
        attraction.cityID.toLowerCase().includes(searchCity)
      );

      return {
        filteredAttractions,
        searchCity,
      };
    });
  };

  handleSortOptionChange = (event) => {
    const sortOption = event.target.value;
    this.setState({ sortOption });
    this.sortAttractions(sortOption, this.state.sortOrder);
  };

  handleSortOrderChange = (event) => {
    const sortOrder = event.target.value;
    this.setState({ sortOrder });
    this.sortAttractions(this.state.sortOption, sortOrder);
  };

  sortAttractions = (sortOption, sortOrder) => {
    let sortedAttractions = [...this.state.filteredAttractions];

    if (sortOption === "rating") {
      sortedAttractions.sort((a, b) =>
        sortOrder === "asc" ? a.Rating - b.Rating : b.Rating - a.Rating
      );
    } else if (sortOption === "name") {
      sortedAttractions.sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    }

    this.setState({ filteredAttractions: sortedAttractions });
  };

  getCurrentAttractions = () => {
    const { filteredAttractions, currentPage, attractionsPerPage } = this.state;
    const indexOfLastAttraction = currentPage * attractionsPerPage;
    const indexOfFirstAttraction = indexOfLastAttraction - attractionsPerPage;
    return filteredAttractions.slice(
      indexOfFirstAttraction,
      indexOfLastAttraction
    );
  };

  setCurrentPage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const {
      filteredAttractions,
      searchCity,
      sortOption,
      sortOrder,
      currentPage,
      attractionsPerPage,
    } = this.state;
    const attractionsToDisplay = this.getCurrentAttractions();
    const totalAttractions = filteredAttractions.length;
    const totalPages = Math.ceil(totalAttractions / attractionsPerPage);

    return (
      <div className="backgroundAttractions">
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
            Discover Top-Rated Attractions!
          </p>
        </div>
        <br />
        <Container>
          <Row>
            <Col>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search by City"
                  value={searchCity}
                  onChange={this.handleCitySearch}
                />
                <select
                  value={sortOption}
                  onChange={this.handleSortOptionChange}
                  className="sort-dropdownAttractions"
                >
                  <option value="">Sort by</option>
                  <option value="rating">Rating</option>
                  <option value="name">Name</option>
                </select>
                <select
                  value={sortOrder}
                  onChange={this.handleSortOrderChange}
                  disabled={!sortOption}
                  className="sort-dropdownAttractions"
                >
                  <option value="">Sort order</option>
                  {sortOption === "name" ? (
                    <>
                      <option value="asc">A-Z</option>
                      <option value="desc">Z-A</option>
                    </>
                  ) : (
                    <>
                      <option value="asc">Low to High</option>
                      <option value="desc">High to Low</option>
                    </>
                  )}
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            {attractionsToDisplay.map((attraction, i) => (
              <Col key={i} xs={12} sm={6} md={4}>
                <Card
                  style={{ width: "100%", margin: "20px" }}
                  border={"success"}
                  bg={"light"}
                  text={"dark"}
                >
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
            currentPage={currentPage}
            setCurrentPage={this.setCurrentPage}
          />
        </Container>
      </div>
    );
  }
}

export default Attractions;
