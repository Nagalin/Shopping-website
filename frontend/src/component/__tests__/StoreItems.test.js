
import React from "react";
import { render, screen,fireEvent, cleanup } from "@testing-library/react";
import StoreItems from "../StoreItems";
import { ShoppingCartProvider } from '../../context/shoppingCartContext'

beforeEach(()=>{
    render(
        <ShoppingCartProvider>
            <StoreItems />
        </ShoppingCartProvider>)
})

afterEach(()=> cleanup())

test('Should display add to cart button', () => {
    

    expect(screen.getByRole('addToCart')).toBeEnabled() 
    expect(screen.getByRole('chat')).toBeEnabled()
    expect(screen.queryByRole('decrease')).toBeNull()
    expect(screen.queryByRole('increase')).toBeNull()
})

test('Should display increase,decrease and remove button', () => {
    expect(screen.getByRole('addToCart')).toBeEnabled()
    
    fireEvent.click(screen.getByRole('addToCart')) 

    expect(screen.queryByRole('chat')).toBeNull() 
    expect(screen.queryByRole('decrease')).toBeInTheDocument()
    expect(screen.queryByRole('increase')).toBeInTheDocument()
})
