import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import data from '../data/items.json'
import formatCurrency from '../utilites/formatCurrency'
import { useShoppingCart } from '../context/shoppingCartContext'

interface WishListProps {
    id: number,
    quantity: number
}

export default function WishList({ id, quantity }: WishListProps) {
    const {removeFromCart} = useShoppingCart()
    const item = data.find(val => val.id === id)
    if (item == null) return null

    return (
        <Stack role='wrapper' direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item?.imgUrl} style=
                {{
                    width: '125px', height: '75px',
                    objectFit: 'cover',
                    marginRight: '15px'
                }}>

            </img>
            <div className='d-flex flex-column'>
                <div className="d-flex align-items-center gap-2">
                    <div>{item.name}{"  "}

                    </div>
                    <div className='text-muted' style={{ fontSize: '.85rem' }}>x{quantity}
                    </div>
                </div>

                <div className="text-muted">{formatCurrency(item.price)}</div>

            </div>

            <div className="ms-auto">
                {formatCurrency(item.price * quantity)}
            </div>

            <Button onClick={()=>removeFromCart(id)} variant='outline-danger'>&times;</Button>
        </Stack>
    )
}
