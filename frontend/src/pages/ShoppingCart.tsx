import React, {lazy, Suspense, useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../features/pagination/component/Pagination'
import usePagination from '../features/pagination/hook/usePagination'
import useFetch from '../hook/useFetch'
import Search from '../features/search-product/component/Search'
const StoreItems = lazy(() => import('../component/StoreItems'))

interface Items {
    _id : string;
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

  const [items,setItems] = useState<Items[]>()

 
  const data = useFetch({url : '/store'}) as Items[]

  useEffect(()=>{
    setItems(data)
    console.log(data)
  },[data])

  

  if(items == null) return 

  const currentItems = items.slice(firstIndex,lastIndex)
  
  return (
    
    <Container>
      <Search setItems={setItems}/>

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