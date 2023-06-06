import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import items from '../data/items.json'
import StoreItems from '../component/StoreItems'

export default function ShoppingCart() {
  return (
    <Container>
      <input type="text" className="form-control mt-4" placeholder='Search for items' style={{
        width: '800px',
        margin: '0 auto'
      }} />

      <Row lg={3} sm={2} xs={1} style={{marginTop: '20px'}} className='g-4'>
        {items.map((val)=>{
          return (
            <Col key={val.id}><StoreItems {...val}/></Col>
          )
        })}
      </Row>

    </Container>
  )
}
