import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import formatCurrency from '../utilites/formatCurrency'
import { useShoppingCart } from '../context/shoppingCartContext'

interface WishListProps {
    id: string,
}

export default function WishList({ id }: WishListProps) {
    const {removeFromCart,cartItems} = useShoppingCart()
    const item = cartItems.find(i =>i.id === id) 
    
    if(item == null) return
    
    return (
        <Stack role='wrapper' direction='horizontal' gap={2} 
        className='d-flex align-items-center'>
            <img src={`http://localhost:8000/${item.imageName}`} style=
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
                    <div className='text-muted' style={{ fontSize: '.85rem' }}>x{item.quantity}
                    </div>
                </div>

                <div className="text-muted">{formatCurrency(item.price)}</div>

            </div>

            <div className="ms-auto">
                {formatCurrency(item.price * item.quantity)}
            </div>

            <Button onClick={()=>removeFromCart(id)} variant='outline-danger'>
                &times;
            </Button>
        </Stack>
    )
}
