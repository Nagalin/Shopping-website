
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import StoreItems from "../StoreItems";
import {ShoppingCartProvider} from '../../context/shoppingCartContext'

describe('Test storeItems component',()=>{
   
    beforeEach(()=>{
        render(
            <ShoppingCartProvider> 
                <StoreItems/> 
            </ShoppingCartProvider>  
       
        )
    })

    afterEach(()=>cleanup())

    test('Should display add to cart button',()=>{
        expect(true).toBe(true)
        expect(screen.getByRole('addToCart')).toBeEnabled()
        expect(screen.getByRole('chat')).toBeEnabled()
        expect(screen.queryByRole ('decrease')).toBeNull()
        expect(screen.queryByRole ('increase')).toBeNull()
    })
})