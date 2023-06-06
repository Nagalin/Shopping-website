import { Col, Container, Row } from 'react-bootstrap'

export default function Contact() {
    return (
        <Container style={{marginTop: '70px'}}>

            <Row>
                <Col className='d-flex align-items-center gap-3'>
                    <div style={{ fontSize: '1.7rem' }}>Email: </div>
                    <div style={{ fontSize: '1.3rem' }}>admin@gmail.com</div>
                </Col>
            </Row>

            <Row>
                <Col className='d-flex align-items-center gap-3'>
                    <div style={{ fontSize: '1.7rem' }}>Line: </div>
                    <div style={{ fontSize: '1.3rem' }}>@admin-shopping-cart</div>
                </Col>
            </Row>

            <p style={{marginTop: '10px'}}>If you encounter any issues or have any questions,
                please don't hesitate to contact us. We are here to help and ensure
                that your experience is as smooth as possible. Your feedback is valuable to us,
                so if you come across any problems,
                please reach out to our support team. Your satisfaction is our top priority,
                and we appreciate your collaboration in helping us improve our services.
                Please feel free to contact us at any time, and we will be glad to assist you.
            </p>
        </Container>
    )
}
