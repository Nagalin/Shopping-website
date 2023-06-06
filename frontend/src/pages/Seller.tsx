import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Seller() {
  return (
    <Container className='bg-light rounded p-3'>
      <Row className='d-flex flex-column gap-3'>
        <Col className='d-flex justify-content-between '>
          <span>Book x1</span>
          <span>116</span>
        </Col>

        <Col className='d-flex justify-content-between '>
          <span>Banana x2</span>
          <span>300</span>
        </Col>

        <Col>
        <span>Total :400 </span>
        </Col>
      </Row>

      <Col className='mt-3'>
        <Button>View buyer profile</Button>
      </Col>
    </Container>
  )
}
