import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import formatCurrency from '../utilites/formatCurrency'

type StoreItemsProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export default function StoreItems({ id, name, price, imgUrl }: StoreItemsProps) {
    const {getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantiy = getItemQuantity(id)
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
                {quantiy === 0 ? (
                    <>
                        <Button role='addToCart' onClick={()=>increaseQuantity(id)}>+ Add To Cart</Button>

                        <Button role='chat' className='btn-success mt-3'>Chat with seller</Button>
                    </>
                ) : (
                    <div className='d-flex flex-column align-items-center gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <Button role='decrease' onClick={()=>decreaseQuantity(id)}>-</Button>
                            <span>{quantiy} in cart</span>
                            <Button role='increase' onClick={()=>increaseQuantity(id)}>+</Button>
                        </div>

                        <div>
                            <Button variant="danger" onClick={()=>removeFromCart(id)}>Remove from cart</Button>
                        </div>
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}
