import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';
import React, { Component } from "react";
import data from "./Data/attractions_Boston.json";

function Trips() {

    return (
        <div className= "backgroundCities">
        <br></br>
        <div style={{ border: '10px solid white', padding: '1px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <p style= {{fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}>Discover Top-Rated Attractions Around the World!</p>
        </div>
        <br></br>
        <div>
            {
                data.map((data, i) => (
                    <Card style={{width: "80%", margin: "100px"}} border={'success '} bg={'light'} text={'dark'} key={i}>
                        <Card.Body>
                            <Card.Title>{data.name}</Card.Title>
                            <Card.Img src={data.image_url} style={{width: '200px'}}/>
                            <Card.Text>
                                <li>Rating: {data.rating}</li>
                                <li>Price: {data.price}</li>
                                <li>Location: {data.location.address1}</li>
                                <li>Phone Number: {data.phone}</li>
                                <li><a href="Cities">City: {data.location.city}</a></li>
                                <li><a href="Reviews">Ratings: {data.rating}</a></li>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>        
    </div>
    )
}

<<<<<<< HEAD
export default Attractions;
=======
export default Trips;


>>>>>>> 441bc9f1397a8092e0ed9938aad29fb11ec7b28d
