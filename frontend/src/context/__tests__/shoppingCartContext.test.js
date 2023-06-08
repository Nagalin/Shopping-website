import { cleanup, screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import { ShoppingCartProvider, useShoppingCart } from "../shoppingCartContext";
describe('Test shoppingCart context', () => {
    beforeEach(() => {
        jest.mock('../../component/SlideCanvas', () => () => <div>Mock canvas</div>)
    })

    afterEach(() => {
        cleanup()
    })

    test('Should increase and decrease quantity', () => {
        const TestComponent = () => {
            const { increaseQuantity, decreaseQuantity, getAllItemQuantity } = useShoppingCart()


            const handleIncrease = () => {
                increaseQuantity(1)
            }

            const handleDecrease = () => {
                decreaseQuantity(1)
            }

            return (
                <div>
                    <button role='increase' onClick={handleIncrease}>Increase Quantity</button>
                    <div role="quantity">{getAllItemQuantity()}</div>
                    <button role='decrease' onClick={handleDecrease}>Decrease Quantity</button>
                </div>
            );
        }
        render(<ShoppingCartProvider><TestComponent /></ShoppingCartProvider>)
        fireEvent.click(screen.getByRole('increase'))
        expect(screen.getByRole('quantity').textContent).toBe("1")

        fireEvent.click(screen.getByRole('decrease'))
        expect(screen.getByRole('quantity').textContent).toBe("0")
    })

    test('Should remove item from cart', () => {
       
        const TestComponent = () => {
            const { 
                increaseQuantity, 
                removeFromCart, 
                getAllItemQuantity
            } = useShoppingCart()
           

            const handleIncrease = () => {
                increaseQuantity(1)
            }

            const remove = () => {
               removeFromCart(1)
            }

            return (
                <div>
                    <button role='increase' onClick={handleIncrease}>Increase Quantity</button>
                    <div role="quantity">{getAllItemQuantity()}</div>
                    <button role='remove' onClick={remove}>Remove from cart</button>
                </div>
            );
        }

        render(<ShoppingCartProvider><TestComponent /></ShoppingCartProvider>)
        fireEvent.click(screen.getByRole('increase'))
        expect(screen.getByRole('quantity').textContent).toBe("1")

        fireEvent.click(screen.getByRole('remove'))
        expect(screen.getByRole('quantity').textContent).toBe("0")
    })
})