import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import smfb from '../assets/smfb.png'
import smig from '../assets/smig.png'


function Footer () {
  return (
    <div className="footerSection">
        <Container className="pt-3 pb-2">
            <Row>
                <Col xs={3} sm={3}><h3 className="fs-1 text-center mb-0 d-flex align-items-center justify-content-center">XV</h3>
                </Col>
                <Col xs={3} sm={3} className="text-white pb-2 d-flex align-items-center justify-content-center">
                    <Nav className="flex-column">
                            <Nav-item>
                                <Nav-link href="/">Home</Nav-link>
                            </Nav-item>
                            <Nav-item>
                                <Nav-link href="/About">About</Nav-link>
                            </Nav-item>
                            <Nav-item>
                                <Nav-link href="/Projects">Works</Nav-link>
                            </Nav-item>
                            <Nav-item>
                                <Nav-link href="/Contact">Contact</Nav-link>
                            </Nav-item>
                        </Nav>
                </Col>
                <Col xs={6} sm={6} className="text-white pb-2">
                    <Row id='socmed' className="text-center">
                        <Col xs={12} sm={12} className="pb-4  d-flex align-items-center justify-content-center">
                            <Nav>
                                <Nav-item>
                                    <Nav-link href="https://www.facebook.com/owen.sb.37" target="_blank" rel="noopener noreferrer" ><img src={smfb} alt="fb logo" className="px-3"/></Nav-link>
                                </Nav-item>
                                <Nav-item>
                                    <Nav-link href="https://www.instagram.com/owensb10/" target="_blank" rel="noopener noreferrer"><img src={smig} alt="ig logo" /></Nav-link>
                                </Nav-item>
                            </Nav>    
                        </Col>
                        <Col xs={12} sm={12} >
                            <p className="fw-lighter">©Owen SB. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>

    </div>
  )
}

export default Footer