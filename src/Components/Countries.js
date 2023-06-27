import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import Photo1 from "./Photos/jordan.jpeg";
import Photo2 from "./Photos/south africa.jpeg";
import Photo3 from "./Photos/turkey.jpeg";
import Photo4 from "./Photos/sri lanka.jpeg";
import Photo5 from "./Photos/morocco.jpeg";
import Photo6 from "./Photos/sweden.jpeg";
import Photo7 from "./Photos/india.jpeg";
import Photo8 from "./Photos/croatia.jpeg";
import Photo9 from "./Photos/argentina.jpeg";
import Photo10 from "./Photos/new zealand.jpeg";



import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Countries() {
  return (
    <div style={{backgroundColor: "black"}}>
        <p style={{fontSize: 50, textAlign: "center", color: "white"}}>Look Into These Mesmerizing Countries!</p>
        <Container>
            <Row>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Jordan</Card.Title>
                    <Card.Text>
                    Discover the awe-inspiring wonders of Jordan, where ancient treasures like the rose-red city of Petra 
                    and the mesmerizing Dead Sea captivate the senses, offering a captivating blend of history, natural 
                    beauty, and warm hospitality. Explore the magnificent landscapes of Wadi Rum's desert dunes, wander 
                    through the intricate mosaics of Madaba, and experience the vibrant culture of Amman's bustling markets. 
                    Jordan invites you to embark on an unforgettable journey filled with captivating landscapes, rich heritage, and unforgettable experiences.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <img src={Photo1} alt="Jordan" style={{width: "auto", height: "500px"}}/>
            </Row>


            <br></br>
            <Row>
            <img src={Photo2} alt="South Africa" style={{width: "auto", height: "500px"}}/>
                <Col>
                <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>South Africa</Card.Title>
                    <Card.Text>
                    Unveil the breathtaking marvels of South Africa, where the golden plains of Kruger National Park 
                    with majestic wildlife, the vibrant streets of Cape Town exude multicultural charm, and the rugged 
                    coastlines of the Garden Route offer a scenic paradise. Immerse yourself in the captivating beauty 
                    of Table Mountain, indulge in world-class wine tastings in Stellenbosch, and witness the raw power 
                    of Victoria Falls. South Africa welcomes you to a land of diverse landscapes, rich history, and unforgettable adventures that will leave you in awe.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>

            <br></br>

                <Row>
                <Col>
                <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Turkey</Card.Title>
                    <Card.Text>
                    Immerse yourself in the enchanting allure of Turkey, where the vibrant tapestry of 
                    Istanbul's rich history meets the surreal landscapes of Cappadocia's fairy chimneys 
                    and the ancient ruins of Ephesus. Discover the mesmerizing beauty of Pamukkale's terraces, 
                    indulge in the flavors of Turkish cuisine, and sail along the stunning Turquoise Coast. 
                    Turkey invites you to delve into its captivating blend of cultural heritage, natural wonders, and warm hospitality, creating a journey that will leave you spellbound.
                    </Card.Text>
                </Card.Body>
            </Card>
                </Col>
                <img src={Photo3} alt="Turkey" style={{width: "auto", height: "500px"}}/>
                </Row>
    

                <br></br>

            <Row>
            <img src={Photo4} alt="Sri Lanka" style={{width: "500px", height: "auto"}}/>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Sri Lanka</Card.Title>
                    <Card.Text>
                    Uncover the tropical paradise of Sri Lanka, where emerald tea plantations blanket rolling hills, ancient temples whisper stories 
                    of bygone eras, and pristine beaches invite you to soak up the sun. Immerse yourself in the enchanting beauty of this island gem, 
                    where culture, wildlife, and natural wonders intertwine to create an unforgettable journey.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>


            <br></br>
            <Row>
            <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Morocco</Card.Title>
                    <Card.Text>
                    Embark on a sensory voyage to Morocco, where bustling souks in Marrakech intoxicate with vibrant colors and exotic aromas, 
                    the towering Atlas Mountains entice adventurers to conquer their peaks, and the intricate beauty of Moorish architecture in 
                    cities like Fez and Casablanca transport you to an ancient world. Let the enchantment of Morocco's rich culture and diverse landscapes captivate your soul
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <img src={Photo5} alt="Morocco" style={{width: "500px", height: "auto"}}/>
        </Row>


            <br></br>

            <Row>
            <img src={Photo6} alt="Sweden" style={{width: "500px", height: "auto"}}/>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Sweden</Card.Title>
                    <Card.Text>
                    Indulge in the captivating allure of Sweden, where picturesque cities like Stockholm blend historic charm with modern design, 
                    the untouched wilderness of the Arctic Circle beckons with the dancing Northern Lights, and the serene beauty of the archipelagos 
                    invites you to explore a world of countless islands. Immerse yourself in Sweden's unique blend of nature, innovation, and Scandinavian
                     culture for an unforgettable Scandinavian adventure
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>


            <br></br>
            <Row>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>India</Card.Title>
                    <Card.Text>
                    Embark on a transformative journey through India, a land of vivid contrasts where the iconic Taj Mahal stands as a 
                    testament to eternal love, the bustling streets of Delhi are a tapestry of vibrant colors and aromatic spices, and 
                    the tranquil backwaters of Kerala offer a serene escape. Immerse yourself in India's rich tapestry of traditions, 
                    flavors, and ancient wonders, and let this enchanting country awaken your senses.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <img src={Photo7} alt="India" style={{width: "auto", height: "500px"}}/>
            </Row>


            <br></br>
            <Row>
            <img src={Photo8} alt="Croatia" style={{width: "500px", height: "auto"}}/>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Croatia</Card.Title>
                    <Card.Text>
                    Uncover the captivating beauty of Croatia, where the ancient walls of Dubrovnik tell tales of 
                    medieval grandeur, the stunning Plitvice Lakes National Park dazzles with its cascading waterfalls 
                    and turquoise lakes, and the picturesque coastline of the Adriatic Sea beckons with sun-soaked beaches 
                    and charming coastal towns. Immerse yourself in the allure of Croatia's rich history, natural wonders, 
                    and Mediterranean charm for an unforgettable Adriatic adventure.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>


            <br></br>
            <Row>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>Argentina</Card.Title>
                    <Card.Text>
                    Embark on an unforgettable journey through Argentina, where the vibrant streets of Buenos Aires 
                    pulsate with tango rhythms, the mighty Iguazu Falls cascade in breathtaking splendor, and the 
                    rugged beauty of Patagonia's glaciers captivate the imagination. From the soul-stirring landscapes 
                    of the Andes to the world-renowned vineyards of Mendoza, Argentina offers a tapestry of natural 
                    wonders, cultural richness, and culinary delights that will leave you spellbound
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <img src={Photo9} alt="Argentia" style={{width: "500px", height: "auto"}}/>
            </Row>

            <br></br>


            <Row>
            <img src={Photo10} alt="New Zealand" style={{width: "auto", height: "500px"}}/>
                <Col>
            <Card border={'success '} bg={'light'} text={'dark'}>
                <Card.Body>
                    <Card.Title>New Zealand</Card.Title>
                    <Card.Text>
                    Uncover the awe-inspiring wonders of New Zealand, where snow-capped peaks adorn the horizon, 
                    pristine fjords carve through ancient landscapes, and vibrant cities seamlessly blend urban 
                    delights with breathtaking natural beauty. Explore the enchanting glowworm caves of Waitomo, 
                    hike the majestic trails of Milford Sound, and immerse yourself in the warm hospitality of 
                    Kiwi culture. Discover a land of extraordinary beauty and adventure that will leave an indelible mark on your heart
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            </Row>

            <br></br>
            
        </Container>
    </div>
  );
}

export default Countries;