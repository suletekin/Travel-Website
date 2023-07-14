import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import axios from "axios";
import Pagination from "./Pagination";

class Cities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
      error: null,
      searchCity: "",
      sortOption: "",
      sortOrder: "",
      currentPage: 1,
      citiesPerPage: 9,
    };
  }

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

    this.setState({
      searchCity,
      currentPage: 1,
    });
  };

  handleSortOptionChange = (event) => {
    const sortOption = event.target.value;
    this.setState({ sortOption });
  };

  handleSortOrderChange = (event) => {
    const sortOrder = event.target.value;
    this.setState({ sortOrder });
  };

  setCurrentPage = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { cities, error, searchCity, sortOption, sortOrder, currentPage, citiesPerPage } = this.state;

    if (error) {
      return (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      );
    } else {
      // Apply search filter
      const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(searchCity)
      );

      // Apply sort filter
      let sortedCities = [...filteredCities];

      if (sortOption === "population") {
        sortedCities.sort((a, b) =>
          sortOrder === "asc"
            ? a.population - b.population
            : b.population - a.population
        );
      } else if (sortOption === "latitude") {
        sortedCities.sort((a, b) =>
          sortOrder === "asc"
            ? a.latitude - b.latitude
            : b.latitude - a.latitude
        );
      } else if (sortOption === "longitude") {
        sortedCities.sort((a, b) =>
          sortOrder === "asc"
            ? a.longitude - b.longitude
            : b.longitude - a.longitude
        );
      }

      // Pagination
      const indexOfLastCity = currentPage * citiesPerPage;
      const indexOfFirstCity = indexOfLastCity - citiesPerPage;
      const currentCities = sortedCities.slice(indexOfFirstCity, indexOfLastCity);
      const totalPages = Math.ceil(sortedCities.length / citiesPerPage);

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
                  <input
                    type="text"
                    placeholder="Search by City"
                    value={searchCity}
                    onChange={this.handleCitySearch}
                  />
                  <select
                    value={sortOption}
                    onChange={this.handleSortOptionChange}
                    className="sort-dropdownCities"
                  >
                    <option value="">Sort by</option>
                    <option value="population">Population</option>
                    <option value="latitude">Latitude</option>
                    <option value="longitude">Longitude</option>
                  </select>
                  <select
                    value={sortOrder}
                    onChange={this.handleSortOrderChange}
                    disabled={!sortOption}
                    className="sort-dropdownCities"
                  >
                    <option value="">Sort order</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
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
}

export default Cities;



// import React from "react";
// import { Col, Container, Row, Card } from "react-bootstrap";
// import axios from "axios";
// import Pagination from "./Pagination";

// class Cities extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cities: [],
//       error: null,
//       currentPage: 1,
//       citiesPerPage: 9, // Set the desired number of cities per page
//     };
//   }

//   changeCity = (event) => {
//     event.preventDefault();
//     this.props.setCity("Austin");
//   };

//   componentDidMount() {
//     let config = {
//       method: "get",
//       maxBodyLength: Infinity,
//       url: "https://testdatabase-392302.uc.r.appspot.com/cities",
//       headers: {},
//     };
//     axios
//       .request(config)
//       .then((response) => {
//         this.setState({
//           cities: response.data,
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           error,
//         });
//       });
//   }

//   render() {
//     const { cities, error, currentPage, citiesPerPage } = this.state;

//     if (error) {
//       return (
//         <div>
//           <h1>Error</h1>
//           <p>{error.message}</p>
//         </div>
//       );
//     } else {
//       // Logic for pagination
//       const indexOfLastCity = currentPage * citiesPerPage;
//       const indexOfFirstCity = indexOfLastCity - citiesPerPage;
//       const currentCities = cities.slice(indexOfFirstCity, indexOfLastCity);

//       // Function to handle page change
//       const handlePageChange = (pageNumber) => {
//         this.setState({ currentPage: pageNumber });
//       };

//       return (
//         <div className="backgroundCities">
//           <br />
//           <div
//             style={{
//               border: "10px solid white",
//               padding: "1px",
//               backgroundColor: "white",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               height: "100%",
//             }}
//           >
//             <p
//               style={{
//                 fontSize: 50,
//                 textAlign: "center",
//                 fontWeight: "800",
//                 margin: "auto",
//               }}
//             >
//               Discover Top-Rated Cities!
//             </p>
//           </div>
//           <br />
//           <Container>
//             <Row>
//               {currentCities.map((city, i) => (
//                 <Col key={i} xs={12} sm={6} md={4}>
//                   <Card
//                     style={{ width: "100%", margin: "20px" }}
//                     border={"success"}
//                     bg={"light"}
//                     text={"dark"}
//                   >
//                     <Card.Body>
//                       <Card.Title>{city.name}</Card.Title>
//                       <Card.Text>
//                         <ul>
//                           <li>Population: {city.population}</li>
//                           <li>Latitude: {city.latitude}</li>
//                           <li>Longitude: {city.longitude}</li>
//                           <li>
//                             <a href="Attractions" onClick={this.changeCity}>
//                               Attractions
//                             </a>
//                           </li>
//                         </ul>
//                       </Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Container>

//           <Pagination
//             nPages={Math.ceil(cities.length / citiesPerPage)}
//             currentPage={currentPage}
//             setCurrentPage={handlePageChange}
//           />
//         </div>
//       );
//     }
//   }
// }

// export default Cities;

