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
            <div style={{border: "10px solid white", padding: "1px", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center", height: "100%",}}>
            <p style={{ fontSize: 50, textAlign: "center", fontWeight: "800", margin: "auto"}}> Welcome to TripTrekker! Plan your next <em>Trip</em> today!</p>
            </div>
        </div>

    );
  }
  
  export default Menu;