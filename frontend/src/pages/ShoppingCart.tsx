import React, {lazy, Suspense,useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../features/pagination/component/Pagination'
import usePagination from '../features/pagination/hook/usePagination'
import useFetch from '../hook/useFetch'
const StoreItems = lazy(() => import('../component/StoreItems'))

interface Items {
    _id : number;
    name: string;
    price:number ;
    imageName : string
}

export default function ShoppingCart() {
  const {
    firstIndex,
    lastIndex,
    itemsPerPage,
    setCurrentPage
  } = usePagination()

  const items = useFetch({url : '/store'}) as Items[]

  if(items == null) return 

  

  const currentItems = items.slice(firstIndex,lastIndex)
  
  return (
    
    <Container>
      <input type="text" className="form-control mt-4" placeholder='Search for items' style={{
        maxWidth: '800px',
        margin: '0 auto'
      }} />

      <Row lg={3} sm={2} xs={1} style={{ marginTop: '20px' }} className='g-4'>
        {currentItems.map((val) => {
          return (
            <Suspense  key={val._id}>
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
