import React, { lazy, Suspense, useEffect } from 'react'
import { Button, Col, Container, Row  } from 'react-bootstrap'
import items from '../data/items.json'
import Pagination from '../features/pagination/component/Pagination'
import usePagination from '../features/pagination/hook/usePagination'
import { useNavigate } from 'react-router-dom'
const SellerStore = lazy(() => import('../features/edit-product/component/SellerStore'))
import useFetch from '../features/edit-product/hook/useFetch'
export default function ShoppingCart() {

  const {
    firstIndex,
    lastIndex,
    itemsPerPage,
    setCurrentPage
  } = usePagination()

  const data = useFetch()
  const navigate = useNavigate()
  const currentItems = data?.slice(firstIndex,lastIndex)

  useEffect(()=>console.log(data))
  
  return (
    
    <Container>
      <input type="text" className="form-control mt-4" placeholder='Search for items' style={{
        maxWidth: '800px',
        margin: '0 auto'
      }} />

      <Row lg={3} sm={2} xs={1} style={{ marginTop: '20px' }} className='g-4'>
        {currentItems?.map((val) => {
          return (
            <Suspense  key={val._id}>
              <Col><SellerStore {...val} /></Col>
            </Suspense>
          )
        })}
      </Row>
      <Suspense>
        <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} 
        changePage={page => setCurrentPage(page)}/>
        </Suspense>

        <Button onClick={()=>navigate('/add-product')} className='btn btn-success'>
          Add a new product
          </Button>
    
    </Container>
    
  )
}
