import Col from "react-bootstrap/Col";
import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from 'react-bootstrap/Card';

function Reviews() {
  return (
    <div>
        <p style={{fontSize: 50, textAlign: "center"}}>Check out our customer reviewed destinations here!</p>
        <Container>
            <Row>
                <Card>
                    <Card.Img></Card.Img>
                </Card>
            </Row>
            <Row>
                <Col>
                    <Card></Card>
                </Col>
                <Col>
                    <Card></Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Reviews;