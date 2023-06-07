import React from 'react'
import SlideCanvas from '../component/SlideCanvas'
import useLocalStrorage from '../hook/useLocalStorage'
interface ShoppingCartContext {
    getItemQuantity: (id: number) => number
    getAllItemQuantity: () => number
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    openCart: () => void
    closeCart: () => void
    cartItems: CartItems[]
}

interface ShoppingCartProviderProp {
    children: React.ReactNode
}

interface CartItems {
    id: number,
    quantity: number
}
const ShoppingCartContext = React.createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return React.useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProp) {
    const [cartItems, setCartItems] = useLocalStrorage<CartItems[]>("shopping-cart",[])
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function getAllItemQuantity() {
        return cartItems.reduce(
            (quantity, item) => quantity = item.quantity + quantity
            , 0)
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

    const openCart = () => setIsOpen(true)

    const closeCart = () => setIsOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseQuantity,
            decreaseQuantity,
            removeFromCart,
            getAllItemQuantity,
            openCart,
            closeCart,
            cartItems
        }}>
            {children}
            <SlideCanvas isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )

}