import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ShowProfile from '../features/showProfile/component/ShowProfile'

export default function Profile() {
  return (
    <Container>
      <ShowProfile/>
      <Button className='btn-success mt-3'>Change Password</Button>
    </Container>
  )
}
