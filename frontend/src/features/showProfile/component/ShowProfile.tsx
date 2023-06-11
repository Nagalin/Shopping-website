import React  from 'react'
import { Col, Row } from 'react-bootstrap'
import useProfile from '../hook/useProfile'

interface profile {
  name : string,
  'last name' : string
  email : string,
  'phone number' :string,
  age : number,
  address : string
}
export default function ShowProfile() {
  const profile = useProfile() as profile[]

  return (
    <>
      {profile.map((obj, index) => {
        return Object.entries(obj).map(([key, value],i) => (
          <Row  key={`${index}-${i}`}>
            <Col className='d-flex align-items-center gap-3 justify-content-between'>
              <div className='d-flex align-items-center gap-3'>
                <div style={{ fontSize: '1.7rem' }}>{key}: </div>
                <div style={{ fontSize: '1.3rem' }}>{value}</div>
              </div>
              <img
                src='../../public/edit.svg'
                alt='edit'
                style={{
                  height: '50px',
                  width: '50px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
                onClick={() => console.log('click')}
              />
            </Col>
          </Row>
        ));
      })}
    </>
  );
  
}
