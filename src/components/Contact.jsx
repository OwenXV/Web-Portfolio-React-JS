import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import collaborate from '../assets/collaborate.jpg'

function Contact () {
    return (
    <div className="formSection pt-5 pb-5">
        <h1 className="text-center pb-4">Let's Connect!</h1>
        <Container>
            <Row className="justify-content-center">
                <Col md={6} lg={6} xl={6} className="d-flex align-items-center justify-content-center text-center">
                    <img src={collaborate} alt="Contact Photo"/> 
                </Col>
                <Col md={6} lg={6} xl={6} className="">
                    <Row>
                        <Col md={12} lg={8} xl={8}>
                            <Form>   
                                <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={12} lg={8} xl={8}>
                            <Form>   
                                <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={12} lg={8} xl={8}>
                            <Form>   
                                <Form.Group className="mb-3" controlId="formSubject">
                                <Form.Label>Subject:</Form.Label>
                                <Form.Control type="text" placeholder="Enter Subject" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={12} lg={8} xl={8}>
                            <Form>   
                                <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message:</Form.Label>
                                <Form.Control as="textarea" placeholder="Enter Message" rows="3.5" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col md={6} lg={6} xl={6}>
                            <Button className="contact-btn">Submit</Button>
                        </Col>
                    </Row>
                </Col>

                
            </Row>
        </Container>
    </div>
  )
}

export default Contact