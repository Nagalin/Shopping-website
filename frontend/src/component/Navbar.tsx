
import React, {  useRef } from 'react'
import { Button, Nav, Navbar as NavbarBS } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import useToggle from '../hook/useToggle'
import Chatbox from '../features/chat/component/Chatbox'
import { useShoppingCart } from '../context/shoppingCartContext'
import useClickOutside from '../hook/useClickOutside'


export default function Navbar() {

    
    const { value, toggle, setValue } = useToggle()
    const buttonRef = useRef<HTMLButtonElement>(null)
    const { getAllItemQuantity, openCart, cartItems } = useShoppingCart()
    useClickOutside({ref : buttonRef , cb :()=>setValue(false) , value : value})
    
    return (
        <>
            <NavbarBS className='bg-light shadow-sm mb-4'>
                <Nav>
                    <Nav.Link data-testid='profile' to='/profile' as={NavLink} >
                        Profile
                    </Nav.Link>
                    <Nav.Link data-testid='homepage' to='/homepage' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link data-testid='my-store' to='/my-store' as={NavLink}>
                        My-store
                    </Nav.Link>
                    <Nav.Link data-testid='contact' to='/contact' as={NavLink}>
                        Contact
                    </Nav.Link>

                </Nav>

                <Nav className='ms-auto d-flex align-items-center gap-3'>

                    <Button ref={buttonRef} data-testid='chat' variant="none"
                        style={{
                            width: '3rem',
                            height: '3rem'
                        }}

                        onClick={toggle}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"> <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                        </svg>
                    </Button>
                    {value && <div role='chatbox' style={
                        {
                            position: 'absolute',
                            top: '100%',
                            right: '7%',
                            zIndex: 999
                        }}>
                        <Chatbox />
                    </div>}

                    {cartItems.length > 0 &&
                        <Button onClick={openCart}
                            variant="outline-primary"
                            style={{ width: '3rem', height: '3rem' }}>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                fill="currentColor"
                            >
                                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                            </svg>
                            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                                style={{
                                    color: 'white',
                                    position: 'relative',
                                    left: '80%'
                                }}>{getAllItemQuantity()}</div>
                        </Button>}


                    <Nav.Link style={{ marginRight: '10px' }}>
                        Logout
                    </Nav.Link>

                </Nav>
            </NavbarBS>
            <Outlet />
        </>
    )
}
