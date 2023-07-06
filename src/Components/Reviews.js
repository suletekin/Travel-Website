import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import natureImage from './destinationImage.jpeg';
import '../App.css';

function Reviews() {
  return (
    <div className="backgroundReviews">
        <br></br>
        <div style={{ border: '10px solid white', padding: '1px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p style={{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}>Explore Our Highly-Rated Travel Destinations</p>
        </div>
        <br></br>
        <Container>
            <Row>
                <Col>
                    <Card border={'light '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Yosemite Park</Card.Title>
                                <Card.Text>
                                    Yosemite Park offers great nature views and some of the tallest trees in the world!
                                </Card.Text>
                            <Button variant="warning">Go to Yosemite!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card border={'light '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Yellowstone National Park</Card.Title>
                                <Card.Text>
                                    Check out the finest natural geysers in the US!
                                </Card.Text>
                            <Button variant="warning">Go to Yellowstone!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                <Card border={'light '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>New York City!</Card.Title>
                                <Card.Text>
                                    New York City is the best urban area in the world!
                                </Card.Text>
                            <Button variant="warning">Go to New York City!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card border={'light '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Paris!</Card.Title>
                                <Card.Text>
                                    Relax in the city of Love!
                                </Card.Text>
                            <Button variant="warning">Go to Paris!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Reviews;