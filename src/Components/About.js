import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adarsh from './Adarsh.jpeg';
import Austin from './Austin.JPG';
import Alaric from './Alaric.JPG';

function About() {
    return (
        <div>
            <Container>
                <h1 style={{textAlign: "center"}}>IDB1 Group2!</h1>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Adarsh} />
                            <Card.Body>
                                <Card.Title>Adarsh Ashok</Card.Title>
                                <Card.Text>Frontend Developer, Class of 2026 UTCS</Card.Text>
                                <Card.Text>Frontend Developer: I managed the design and basic functionality of the website. I collaborated with another frontend developer to use React integrated with Bootstrap.</Card.Text>
                                <Card.Text># of Commits: 4, # of Issues: 3, # of Unit Tests: 0</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Austin} />
                            <Card.Body>
                                <Card.Title>Austin Nguyen</Card.Title>
                                <Card.Text>Software Developer, Incoming Senior Class of 2024, UTCS</Card.Text>
                                <Card.Text>Group leader: delegating tasks, organizing and managing Gitlab repo, creating issues and tasks, backend, deploying flask, deploying different aspects of project via AWS</Card.Text>
                                <Card.Text># of commits: 20, # of issues: 5, # of unit tests: 0</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={Alaric} />
                            <Card.Body>
                                <Card.Title>Alaric Hunziker</Card.Title>
                                <Card.Text>Software Developer, Incoming Senior Class of 2024, UTCS</Card.Text>
                                <Card.Text>Backend: writing flask, writing up the technical report</Card.Text>
                                <Card.Text>number of commits: 1, number of issues: 0, number of unit tests: 0 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                </Row>
            </Container>
        </div>
    );
}
export default About;