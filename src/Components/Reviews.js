import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import natureImage from './destinationImage.jpeg';
import '../App.css';
import data from "./Data/Boston/6aQ3FGZYJ506O1qHQUvC5Q_boston-tea-party-ships-and-museum-boston_reviews.json";


function Reviews() {
  return (
    <div className="backgroundReviews">
        <br></br>
        <div style={{ border: '10px solid white', padding: '1px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p style={{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}>Explore Our Highly-Rated Travel Destinations</p>
        </div>
        <br></br>
        <div>
            {
                data.map((data, i) => (
                    <Card style={{width: "80%", margin: "100px"}} border={'success '} bg={'light'} text={'dark'} key={i}>
                        <Card.Body>
                            <Card.Title>{data.user.name}</Card.Title>
                            <Card.Img src={data.user.image_url} style={{width: '200px'}}/>
                            <Card.Text>
                                <li><a href={data.url}>Link to Review!</a></li>
                                <li>{data.text}</li>
                                <li>Rating: {data.rating}</li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>    
    </div>
  );
}

export default Reviews;