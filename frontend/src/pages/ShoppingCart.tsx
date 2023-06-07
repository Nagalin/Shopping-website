import React, { lazy, Suspense } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import items from '../data/items.json'
const StoreItems = lazy(() => import('../component/StoreItems'))

export default function ShoppingCart() {
  return (
    <Container>
      <input type="text" className="form-control mt-4" placeholder='Search for items' style={{
        width: '800px',
        margin: '0 auto'
      }} />

      <Row lg={3} sm={2} xs={1} style={{ marginTop: '20px' }} className='g-4'>
        {items.map((val) => {
          return (
            <Suspense  key={val.id}>
              <Col><StoreItems {...val} /></Col>
            </Suspense>
          )
        })}
      </Row>

    </Container>
  )
}
