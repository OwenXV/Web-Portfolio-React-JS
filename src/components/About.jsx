import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import portrait from '../assets/portrait.jpg'


function About () {
    return (
     <div className="aboutSection">
                <div className="containerAbout pt-3">
            <h1 className="text-center">About Me</h1>
        </div>
        <Container className="contentAbout pt-4">
            <Row className="align-items-center">
                <Col md={6} lg={6} xl={6} className="aboutImg pb-4 text-center">
                    <img src={portrait} alt="My Portrait" />
                </Col>
                <Col md={6} lg={6} xl={6} className="aboutContent text-center pb-4">
                    <p>Hi I am Owen. I am exploring the world of fullstack Web development. This is my first project as a Web Developer. The Contents of this website would contain my future projects. This is just the start of a new chapter in my life.</p>
                    <p>Hopefully I can gain more knowledge regarding web development to enrich my skills and upgrade this portfolio to a more unique and advance level.</p>
                </Col>
            </Row>
        </Container>
     </div>

     
  )
}

export default About