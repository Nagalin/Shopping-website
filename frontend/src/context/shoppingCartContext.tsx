import React from 'react'
import SlideCanvas from '../component/SlideCanvas'
import useLocalStrorage from '../hook/useLocalStorage'

interface ShoppingCartContext {
    getItemQuantity: (id: string) => number
    getAllItemQuantity: () => number
    increaseQuantity: (id: string,price : number,name : string,imageName : string) => void
    decreaseQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    openCart: () => void
    closeCart: () => void
    cartItems: CartItems[]
}

interface ShoppingCartProviderProp {
    children: React.ReactNode
}

interface CartItems {
    id: string
    quantity: number
    price : number
    name : string
    imageName : string
}
const ShoppingCartContext = React.createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return React.useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProp) {
    const [cartItems, setCartItems] = useLocalStrorage<CartItems[]>("shopping-cart",[])
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    function getItemQuantity(id: string) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function getAllItemQuantity() {
        return cartItems.reduce(
            (quantity, item) => quantity = item.quantity + quantity
            , 0)
    }

    function increaseQuantity(id: string,price : number,name : string,imgName : string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id: id, quantity: 1, price : price, name : name,imageName : imgName,}]
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

    function decreaseQuantity(id: string) {
        setCartItems(currItems =>{
            if(currItems.find(i => i.id === id)?.quantity === 1) {
                return currItems.filter(item =>item.id !== id)
            } else {
                return currItems.map(item =>{
                    if(item.id === id) {
                        return {...item , quantity : item.quantity -1}
                    }
                    return item
                })
            }
        })
    }

    function removeFromCart(id: string) {
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