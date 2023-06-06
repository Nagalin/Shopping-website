import React, { useState } from 'react'
import SlideCanvas from '../component/SlideCanvas'

interface ShoppingCartProviderProp {
    children: React.ReactNode
}

interface shoppingCartContext {
    getItemQuantity: (id: number) => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    getAllItemQuantity: () => number,
    openCart: () => void,
    closeCart: () => void,
    cartItems : CartItems[]
}

interface CartItems {
    id: number,
    quantity: number
}

const ShoppingCartContext = React.createContext({} as shoppingCartContext)

export function useShoppingCart() {
    return React.useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProp) {
    const [cartItems, setCartItems] = useState<CartItems[]>([])
    const [isOpen,setIsOpen] = useState<boolean>(false)

    const openCart = ()=>setIsOpen(true)
    const closeCart = ()=>setIsOpen(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id: id, quantity: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return currItems
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    function getAllItemQuantity() {
        return cartItems.reduce(
            (quantity, item) => quantity + item.quantity
            , 0)
    }
    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            getAllItemQuantity,
            closeCart,
            openCart,
            cartItems
        }}>
            {children}
            <SlideCanvas isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}
