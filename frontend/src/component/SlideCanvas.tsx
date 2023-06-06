import React from 'react'
import { Button, Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/shoppingCartContext'
import WishList from './WishList'
import formatCurrency from '../utilites/formatCurrency'
import data from '../data/items.json'

interface WishListProp {
    isOpen: boolean
}
export default function SlideCanvas({ isOpen }: WishListProp) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <Offcanvas role='wrapper' show={isOpen} placement='end' onHide={closeCart}>
            <Offcanvas.Header closeButton />

            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => {
                        return <WishList key={item.id} {...item} />
                    })}
                    <div role='total' className="display-6 ms-auto fw-bold">Total: {
                        formatCurrency( cartItems.reduce((total,currItem)=>{
                            const item = data.find(i=> i.id === currItem.id)
                            
                            return total + ((item?.price || 0 )* currItem.quantity)
                        },0))
                           
                    }</div>
                    <Button role='checkout'><div className="fs-5">Check out</div></Button>
                </Stack>

            </Offcanvas.Body>

        </Offcanvas>
    )
}
