import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import '../App.css';
import data from './Data/cities.json';


function Cities() {
  return (
    <div className= "backgroundCities">
        <br></br>
        <div style={{ border: '10px solid white', padding: '1px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p style= {{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}>Discover Top-Rated Cities Around the World!</p>
        </div>
        <br></br>
        <div>
            {
                data.map((data, i) => (
                    <Card style={{width: "80%", margin: "100px"}} border={'success '} bg={'light'} text={'dark'} key={i}>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Text>
                                <li>Population: {data.population}</li>
                                <li>Latitude: {data.latitude}</li>
                                <li>Longitude: {data.longitude}</li>
                                <li><a href="Attractions">Attractions</a></li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>        
    </div>
  );
}

export default Cities;
