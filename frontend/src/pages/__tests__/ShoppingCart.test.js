import React from 'react'
import { render, screen,act } from '@testing-library/react'
import ShoppingCart from '../ShoppingCart'
import data from '../../data/items.json'
import { ShoppingCartProvider } from '../../context/shoppingCartContext'
import formatCurrency from '../../utilites/formatCurrency'


test('Should render shopping cart page', async() => {
    await act(async()=>{
      render(
            <ShoppingCartProvider>
                <ShoppingCart />
            </ShoppingCartProvider>
        )
    })
    
    data.map(item=> {
        expect(screen.getByText(item.name)).toBeInTheDocument()
        expect(screen.getByText(formatCurrency(item.price))).toBeInTheDocument()
    })
   
})