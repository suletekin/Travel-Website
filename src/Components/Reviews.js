import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      error: null,
      searchQuery: "",
      sortOption: "",
      reviewID: "0oSSjekU-3GR8gselReWnA",
      currentPage: 1,
      reviewsPerPage: 6,
    };
  }

  componentDidMount() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://testdatabase-392302.uc.r.appspot.com/reviews?" + "search=" + this.state.searchQuery + 
        "&" + "sort=" + this.state.sortOption + "&reviewID=" + this.state.reviewID,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        this.setState({
          reviews: response.data,
          sortedReviews: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  changeAPI() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://testdatabase-392302.uc.r.appspot.com/reviews?" + "search=" + this.state.searchQuery + 
        "&" + "sort=" + this.state.sortOption + "&reviewID=" + this.state.reviewID,
      headers: {},
    };
    console.log(config.url);
    axios
      .request(config)
      .then((response) => {
        this.setState({
          reviews: response.data,

        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  }

  handleSearchQueryChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery: searchQuery }, () => {
      console.log(this.state.searchQuery);
      this.changeAPI();
    });
  };

  handleSortOptionChange = (event) => {
    const sortOption = event.target.value;
    this.setState({ sortOption: sortOption }, () => {
      console.log(this.state.sortOption);
      this.changeAPI();
    });
  };

  handleFilterChange = (event) => {
    const filterChange = event.target.value;
    //this.setState({ searchCity: searchCity }, () => {
      //console.log(this.state.searchCity);
      //this.changeAPI();
    //});
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };


  render() {


    // Pagination Logic
    const indexOfLastReview = this.state.currentPage * this.state.reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - this.state.reviewsPerPage;
    const currentReviews = this.state.reviews.slice(
      indexOfFirstReview,
      indexOfLastReview
    );

    return (
      <div className="backgroundReviews">
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
            Authentic Travel Experiences: User Reviews and Ratings
          </p>
        </div>
        <br />
        <Container>
          <Row>
            <Col>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Search by Name"
                  value={this.state.searchQuery}
                  onChange={this.handleSearchQueryChange}
                />
                <select
                  onChange={this.handleSortOptionChange}
                  className="sort-dropdownReviews"
                >
                  <option value="">Sort by</option>
                  <option value="Rating">Rating</option>
                </select>
              </div>
            </Col>
          </Row>
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
          <Pagination
            nPages={Math.ceil(this.state.reviews.length / this.state.reviewsPerPage)}
            currentPage={this.state.currentPage}
            setCurrentPage={this.handlePageChange}
          />
        </Container>
      </div>
    );
  }
}

export default Reviews;
