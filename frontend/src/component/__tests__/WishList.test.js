import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import WishList from '../WishList'
import { ShoppingCartProvider } from '../../context/shoppingCartContext'
describe('Test wishList component', () => {

    afterEach(()=>cleanup())

    test('Should render a component', async () => {
        render(
            <ShoppingCartProvider>
                <WishList id={1} quantity={1} />
            </ShoppingCartProvider>)

        expect(screen.getByRole('wrapper')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
        
    })

    test('Should not render a component', async () => {
        render(
            <ShoppingCartProvider>
                <WishList id={10} quantity={1} />
            </ShoppingCartProvider>)

        expect(screen.queryByRole('wrapper')).toBeNull()
        expect(screen.queryByRole('button')).toBeNull()
    })
})