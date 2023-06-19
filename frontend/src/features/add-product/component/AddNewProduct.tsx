import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import useAddProduct from '../hook/useAddProduct'

export default function AddNewProduct() {
    const {
        name,
        price,
        handleSubmit,
        handleFileChange
    } = useAddProduct()
    
    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <Row className='d-flex flex-column gap-3'>
            
                <Col>
                    <div className="input-group">
                        <div className='input-group-text'>Product name:</div>
                        <input required ref={name} type="text" className="form-control" placeholder="Enter your product name" />
                    </div>
                </Col>

                <Col>
                    <div className="input-group">
                        <div className='input-group-text'>Product price:</div>
                        <input required ref={price} type="number" className="form-control" placeholder="Enter your product price" />
                    </div>
                </Col>

                <Col>
                    <div className="input-group">
                        <div className='input-group-text'>Product image:</div>
                       { <input onChange={handleFileChange} required  type="file" className="form-control" placeholder='Enter your product image'/>}
                    </div>
                </Col>

                <Col>
                <Button type='submit'>Add a new product</Button>
                </Col>
                
            </Row>
            </form>

            

        </Container>
    )
}