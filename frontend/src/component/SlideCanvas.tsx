import React, { useEffect } from 'react'
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import WishList from './WishList'
import formatCurrency from '../utilites/formatCurrency'

interface WishListProp {
    isOpen: boolean
}

export default function SlideCanvas({ isOpen }: WishListProp) {
    const { closeCart, cartItems } = useShoppingCart()
    useEffect(()=>console.log(cartItems))
    return (
        <Offcanvas role='wrapper' show={isOpen} placement='end' onHide={closeCart}>
            <Offcanvas.Header closeButton />

            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => {
                        return <WishList key={item.id} {...item} />
                    })}
                    <div role='total' className="display-6 ms-auto fw-bold">Total: {
                        formatCurrency(cartItems.reduce((accumulator, item) => {
                            const itemTotal = item.price * item.quantity;
                            return accumulator + itemTotal;
                          }, 0))

                    }</div>
                    <Button role='checkout'>
                        <div className="fs-5">Check out</div>
                    </Button>
                </Stack>

            </Offcanvas.Body>

        </Offcanvas>
    )
}
