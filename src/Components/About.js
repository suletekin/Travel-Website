import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Adarsh from './Adarsh.jpeg';
import Austin from './Austin.JPG';
import Alaric from './Alaric.JPG';
import Shruti from './Shruti.jpg';
import Sule from './Sule.jpg';

function About() {
    return (
        <div className='backgroundAbout'>
                <br></br>
                <div style={{ border: '10px solid white', padding: '1px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <h1 style={{textAlign: "center"}}>IDB1 Group2!</h1>
                </div>
                <br></br>
            <Container>
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
                    <Col>
                    <br></br>
                    <Card style={{width: "422px"}} >
                            <div style={{width: "420px", height: "auto"} }>
                            <Card.Img variant="top" src={Shruti}/>
                            </div>
                            <Card.Body>
                                <Card.Title>Shruti Raghavan</Card.Title>
                                <Card.Text>Software Developer: Backend, Graduate Student, UTCS</Card.Text>
                                <Card.Text>Responsibilities: BackEnd: Web Scraping, RESTful API, Database, Flask</Card.Text>
                                <Card.Text>Number of Commits: 4, Number of Issues: 3, Number of Unit Tests: 0 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <br></br>
                        <Card style={{width: "400px"}} >
                            <Card.Img variant="top" src={Sule} style={{width: "400px", height: "auto"} }/>
                            <Card.Body>
                                <Card.Title>Sule Tekin</Card.Title>
                                <Card.Text> Software Developer, Senior Class of 2023, UTCS</Card.Text>
                                <Card.Text>Frontend Developer: I collaborated to design and organize the functionality of the website using React that's integrated with Bootstrap.</Card.Text>
                                <Card.Text>number of commits: 4, number of issues: 0, number of unit tests: 0 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default About;