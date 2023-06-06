import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function Product() {
    return (
        <Container>
            <Row className='d-flex flex-column gap-3'>
                <Col>
                    <div className="input-group">
                        <div className='input-group-text'>Product name:</div>
                        <input type="text" className="form-control" placeholder="Enter your product name" />
                    </div>
                </Col>

                <Col>
                    <div className="input-group">
                        <div className='input-group-text'>Product price:</div>
                        <input type="number" className="form-control" placeholder="Enter your product price" />
                    </div>
                </Col>

                <Col>
                    <div className="input-group">
                        <div className='input-group-text'>Product image:</div>
                        <input type="file" className="form-control" placeholder='Enter your product image'/>
                    </div>
                </Col>

                <Col>
                <Button>Add a new product</Button>
                </Col>
            </Row>

            

        </Container>
    )
}
