import React,{useEffect, useState} from 'react'
import { Button, Card} from 'react-bootstrap'
import formatCurrency from '../../../utilites/formatCurrency'
import useToggle from '../../../hook/useToggle'
import Modal from './Modal'
import useFetch from '../hook/useFetch'

type SellerStoreProp = {
    _id: string,
    name: string,
    price: number,
    imageName: string
}

export default function SellerStoreP({ _id, name, price, imageName }: SellerStoreProp) {
    const { value, toggle } = useToggle()
    const [mode,setMode] = useState<string>('')
    
    
    return (
        <Card>
            <Card.Img
                variant='top'
                src={`http://localhost:8000/${imageName}`}
                height='300px'
                style={{ objectFit: 'cover' }}>
            </Card.Img>


            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between'>
                    <div>{name}</div>
                    <div className='text-muted'>{formatCurrency(price)}</div>
                </Card.Title>
                <Button role='addToCart' onClick={toggle}>Edit your product</Button>
                <Button variant='danger' style={{
                    marginTop : '15px'
                }}>Delete your product</Button>

                {value &&
                 <Modal name={name} value={value} toggle={toggle} id={_id} price={price} />
                }


            </Card.Body>
        </Card>
    )
}
