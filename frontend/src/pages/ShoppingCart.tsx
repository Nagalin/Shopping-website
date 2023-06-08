import React, { useEffect,lazy, Suspense } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import items from '../data/items.json'
import Pagination from '../component/Pagination'
import usePagination from '../features/pagination/hook/usePagination'
const StoreItems = lazy(() => import('../component/StoreItems'))

export default function ShoppingCart() {
  const {
    firstIndex,
    lastIndex,
    itemsPerPage,
    setCurrentPage
  } = usePagination()

  const currentItems = items.slice(firstIndex,lastIndex)
  
  return (
    
    <Container>
      <input type="text" className="form-control mt-4" placeholder='Search for items' style={{
        width: '800px',
        margin: '0 auto'
      }} />

      <Row lg={3} sm={2} xs={1} style={{ marginTop: '20px' }} className='g-4'>
        {currentItems.map((val) => {
          return (
            <Suspense  key={val.id}>
              <Col><StoreItems {...val} /></Col>
            </Suspense>
          )
        })}
      </Row>
      <Suspense>
        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} 
        changePage={page => setCurrentPage(page)}/>
        </Suspense>
      

    </Container>
    
  )
}
