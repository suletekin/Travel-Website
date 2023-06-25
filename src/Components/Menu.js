import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../CSS/Menu.css';

function Menu() {
    return (
        <div className="background">
            <p style={{fontSize: 50, textAlign: "center"}}>Welcome to TravelTrekker! Plan your next Trip today!</p>
            <Container>
                <ButtonGroup size="lg" aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </ButtonGroup>
                <Row>
                    <Col>
                        <Card border={'success '} bg={'light'} text={'dark'}>
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
                        <Card border={'success '} bg={'light'} text={'dark'}>
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
                <Row>
                    <Col>
                        <Card border={'success '} bg={'light'} text={'dark'}>
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
                        <Card border={'success '} bg={'light'} text={'dark'}>
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
                <Row>
                    <Col>
                        <Card border={'success '} bg={'light'} text={'dark'}>
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
                        <Card border={'success '} bg={'light'} text={'dark'}>
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