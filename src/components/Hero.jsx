import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from '../assets/HeroImage.png'

function Hero () {
    return (
    <Container className="heroSection pt-5 pb-5 mx-auto" >
        <Row className="align-items-center">
            <Col md={6} l={5} xl={5}className="text-center">
                    <h1 className="pb-1"> Hi I'm <span className="heroName"> Owen SB</span> </h1>
                    <h3 className="pb-2">/an aspiring WebDeveloper</h3>
                    <button className="hero-btn">LEARN MORE</button>
            </Col>
            <Col md={6} l={7} xl={7} className="text-center">
                <img src={HeroImage} alt="Hero Image" />
            </Col>
        </Row>
    </Container>
  )
}

export default Hero