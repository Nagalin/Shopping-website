import React, { lazy, Suspense } from 'react'
import { Button, Col, Container, Row  } from 'react-bootstrap'
import Pagination from '../features/pagination/component/Pagination'
import usePagination from '../features/pagination/hook/usePagination'
import { useNavigate } from 'react-router-dom'
const SellerStore = lazy(() => import('../features/edit-product/component/SellerStore'))
import useFetch from '../hook/useFetch'

interface Data {
  _id : string
  name : string
  price : number
  imageName : string
}

export default function ShoppingCart() {

  const {
    firstIndex,
    lastIndex,
    itemsPerPage,
    setCurrentPage
  } = usePagination()

  const data  = useFetch({url : '/product'} ) as Data[]
  const navigate = useNavigate()
  const currentItems = data?.slice(firstIndex,lastIndex)

  return (
    
    <Container>
      <input type="text" className="form-control mt-4" 
      placeholder='Search for items' style={{
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
        <Pagination itemsPerPage={itemsPerPage} totalItems={data?.length!} 
        changePage={page => setCurrentPage(page)}/>
        </Suspense>

        <Button onClick={()=>navigate('/add-product')} className='btn btn-success'>
          Add a new product
          </Button>
    
    </Container>
    
  )
}
