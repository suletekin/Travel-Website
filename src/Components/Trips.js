import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';


import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Trips() {
  return (
    <div className= "backgroundTrip">
        <br></br>
        <div style={{ border: '10px solid white', padding: '1px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p style={{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}>Discover Unforgettable Travel Experiences: Our Featured Trips</p>
        </div>
        <br></br>
        <Container>
            <Row>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Bali, Indonesia</Card.Title>
                    <Card.Text>
                        You’ll find beaches, volcanoes, Komodo dragons and jungles sheltering elephants, orangutans and tigers.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>


            <br></br>
                <Col>
                <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>New Orleans, LA</Card.Title>
                    <Card.Text>
                        The lively city known for its street music, festive vibe and a melting pot of French, African and American cultures.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>

                </Col>
                <Col>
                <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Kerry, Ireland</Card.Title>
                    <Card.Text>
                    Kerry’s mountains, lakes and coasts are postcard-perfect, and that’s before you add in Killarney National Park.
                    </Card.Text>
                </Card.Body>
            </Card>
                </Col>
    

                <br></br>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Marrakesh, Morocco</Card.Title>
                    <Card.Text>
                    This ancient walled city is home to mosques, palaces and lush gardens.
                    </Card.Text>
                </Card.Body>
            </Card>


            <br></br>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Sydney, Australia</Card.Title>
                    <Card.Text>
                    The city has gorgeous beaches, great cafes and world-class entertainment on offer wherever you look.
                    </Card.Text>
                </Card.Body>
            </Card>


            <br></br>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>The Maldives</Card.Title>
                    <Card.Text>
                    This tropical nation in the Indian Ocean is made up of more than 1,000 coral islands.
                    </Card.Text>
                </Card.Body>
            </Card>


            <br></br>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Paris, France</Card.Title>
                    <Card.Text>
                    You’ll see so many famous landmarks here: the Eiffel Tower, Arc de Triomphe, Notre Dame cathedral—the list is never-ending.
                    </Card.Text>
                </Card.Body>
            </Card>


            <br></br>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Cape Town, South Africa</Card.Title>
                    <Card.Text>
                    Cape Town is a dream location to visit: endless natural beauty and clifftop views, pastel pink neighborhoods and turquoise waters.
                    </Card.Text>
                </Card.Body>
            </Card>


            <br></br>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Dubai, U.A.E.</Card.Title>
                    <Card.Text>
                    The high-flying city of the U.A.E, Dubai is one of the most glamorous destinations you’ll ever visit.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>

            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Bora Bora, French Polynesia</Card.Title>
                    <Card.Text>
                    How do overwater bungalows and underwater adventures sound to you? To us, it’s everything we could want from a bucket list destination.
                    </Card.Text>
                </Card.Body>
            </Card>

            <br></br>
            
        </Container>
    </div>
  );
}

export default Trips;