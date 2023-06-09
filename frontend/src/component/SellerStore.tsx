import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import formatCurrency from '../utilites/formatCurrency'

type SellerStoreProp = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export default function SellerStoreP({ id, name, price, imgUrl }: SellerStoreProp) {
    
    return (
        <Card>
            <Card.Img
                variant='top'
                src={imgUrl}
                height='300px'
                style={{ objectFit: 'cover' }}>
            </Card.Img>

            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between'>
                    <div>{name}</div>
                    <div className='text-muted'>{formatCurrency(price)}</div>
                </Card.Title>
                <Button role='addToCart'>Edit product info</Button>
            </Card.Body>
        </Card>
    )
}
