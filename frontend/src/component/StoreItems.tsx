import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import formatCurrency from '../utilites/formatCurrency'

type StoreItemsProps = {
    _id: number,
    name: string,
    price: number,
    imageName: string
}

export default function StoreItems({ _id, name, price, imageName }: StoreItemsProps) {
    const { getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantiy = getItemQuantity(_id)
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
                {quantiy === 0 ? (
                    <>
                        <Button role='addToCart' onClick={() => increaseQuantity(_id)}>
                            + Add To Cart
                        </Button>

                        <Button role='chat' className='btn-success mt-3'>
                            Chat with seller
                        </Button>
                    </>
                ) : (
                    <div className='d-flex flex-column align-items-center gap-2'>
                        <div className='d-flex align-items-center gap-2'>
                            <Button role='decrease' onClick={() => decreaseQuantity(_id)}>
                                -
                            </Button>
                            <span>{quantiy} in cart</span>
                            <Button role='increase' onClick={() => increaseQuantity(_id)}>
                                +
                            </Button>
                        </div>

                        <div>
                            <Button variant="danger" onClick={() => removeFromCart(_id)}>
                                Remove from cart
                            </Button>
                        </div>
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}
