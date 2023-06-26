import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import natureImage from './destinationImage.jpeg';
function Reviews() {
  return (
    <div>
        <p style={{fontSize: 50, textAlign: "center"}}>Check out our customer reviewed destinations here!</p>
        <Container>
            <img src={natureImage} alt="HI"/>
            <Row>
                <Col>
                    <Card border={'success '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Yosemite Park</Card.Title>
                                <Card.Text>
                                    Yosemite Park offers great nature views and some of the tallest trees in the world!
                                </Card.Text>
                            <Button variant="primary">Go to Yosemite!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card border={'success '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Yellowstone National Park</Card.Title>
                                <Card.Text>
                                    Check out the finest natural geysers in the US!
                                </Card.Text>
                            <Button variant="primary">Go to Yellowstone!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Card border={'success '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>New York City!</Card.Title>
                                <Card.Text>
                                    New York City is the best urban area in the world!
                                </Card.Text>
                            <Button variant="primary">Go to New York City!</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card border={'success '} bg={'light'} text={'dark'}>
                        <Card.Body>
                            <Card.Img></Card.Img>
                            <Card.Title>Paris!</Card.Title>
                                <Card.Text>
                                    Relax in the city of Love!
                                </Card.Text>
                            <Button variant="primary">Go to Paris!</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Reviews;