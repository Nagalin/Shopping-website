import React, {lazy,Suspense} from 'react'
import { Button, Container } from 'react-bootstrap'

const ShowProfile = lazy(()=>import('../features/showProfile/component/ShowProfile'))

export default function Profile() {
  return (
    <Container>
      <Suspense>
      <ShowProfile/>
      </Suspense>
      <Button className='btn-success mt-3'>Change Password</Button>
    </Container>
  )
}
