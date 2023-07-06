import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../App.css';



function Menu() {
    return (
        <div className="backgroundHome">
            <br></br>
            <br></br>
            <p style={{ fontFamily: 'Bitter', fontSize: 50, textAlign: "center" }}> Welcome to TripTrekker! Plan your next <em>Trip</em> today!</p>
            <Container>
                <ButtonGroup size="lg" aria-label="Basic example">
                    <Button variant="secondary" href="/Reviews">Reviews</Button>
                    <Button variant="secondary" href="/Trips">Trips</Button>
                    <Button variant="secondary" href="/About">About</Button>
                </ButtonGroup>
                <Row>
                    <Col>
                        <Card border={'dark '} bg={'light'} text={'dark'}>
                            <Card.Body>
                                <Card.Title>Country Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go to Country!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border={'dark '} bg={'light'} text={'dark'}>
                            <Card.Body>
                                <Card.Title>Country Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go to Country!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Card border={'dark '} bg={'light'} text={'dark'}>
                            <Card.Body>
                                <Card.Title>Country Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go to Country!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border={'dark '} bg={'light'} text={'dark'}>
                            <Card.Body>
                                <Card.Title>Country Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go to Country!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Card border={'dark '} bg={'light'} text={'dark'}>
                            <Card.Body>
                                <Card.Title>Country Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go to Country!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border={'dark '} bg={'light'} text={'dark'}>
                            <Card.Body>
                                <Card.Title>Country Name</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go to Country!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }
  
  export default Menu;