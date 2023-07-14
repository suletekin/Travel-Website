import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      sortedReviews: [],
      error: null,
      searchQuery: "",
      sortOption: "",
      currentPage: 1,
      reviewsPerPage: 6,
    };
  }

  componentDidMount() {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://testdatabase-392302.uc.r.appspot.com/reviews",
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

  handleSearchQueryChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
  };

  handleSortOptionChange = (event) => {
    const sortOption = event.target.value;
    this.setState({ sortOption });
    this.sortReviews(sortOption);
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  sortReviews = (sortOption) => {
    this.setState((prevState) => {
      const { reviews } = prevState;

      let sortedReviews = [...reviews];

      if (sortOption === "ratingsLowToHigh") {
        sortedReviews.sort((a, b) => a.Rating - b.Rating);
      } else if (sortOption === "ratingsHighToLow") {
        sortedReviews.sort((a, b) => b.Rating - a.Rating);
      }

      return {
        sortedReviews,
        sortOption,
      };
    });
  };

  filterReviews = () => {
    const { reviews, searchQuery } = this.state;

    return reviews.filter((review) =>
      review.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  render() {
    const { sortedReviews, sortOption, currentPage, reviewsPerPage } =
      this.state;

    const filteredReviews = this.filterReviews();

    // Pagination Logic
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = filteredReviews.slice(
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
                  value={sortOption}
                  onChange={this.handleSortOptionChange}
                  className="sort-dropdownReviews"
                >
                  <option value="">Sort by</option>
                  <option value="ratingsLowToHigh">Ratings: Low to High</option>
                  <option value="ratingsHighToLow">Ratings: High to Low</option>
                </select>
              </div>
            </Col>
          </Row>
          <Row>
            {currentReviews.map((review, i) => (
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
            nPages={Math.ceil(filteredReviews.length / reviewsPerPage)}
            currentPage={currentPage}
            setCurrentPage={this.handlePageChange}
          />
        </Container>
      </div>
    );
  }
}

export default Reviews;
