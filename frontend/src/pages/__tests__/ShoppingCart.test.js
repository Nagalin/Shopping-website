import React from 'react'
import { render, screen } from '@testing-library/react'
import ShoppingCart from '../ShoppingCart'
import data from '../../data/items.json'
import { ShoppingCartProvider } from '../../context/shoppingCartContext'
import formatCurrency from '../../utilites/formatCurrency'

test('Should render shopping cart page', () => {
    const{getByText} = render(
        <ShoppingCartProvider>
            <ShoppingCart />
        </ShoppingCartProvider>
    )
    data.map(item=> {
        expect(getByText(item.name)).toBeInTheDocument()
        expect(getByText(formatCurrency(item.price))).toBeInTheDocument()
    })
   
})