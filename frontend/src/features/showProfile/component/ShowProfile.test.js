import React from 'react'
import {render,screen} from '@testing-library/react'
import ShowProfile from './ShowProfile'
describe('Test show profile component',()=>{
    test('Should render a component',()=>{
         const {getAllByText} = render(<ShowProfile/>)
         expect(screen.getAllByText(/Name/i)[0]).toBeInTheDocument()
         expect(screen.getAllByText(/Name/i)[1]).toBeInTheDocument()
         expect(screen.getByText(/age/i)).toBeInTheDocument()
         expect(screen.getByText(/email/i)).toBeInTheDocument()
         expect(screen.getByText(/phone number/i)).toBeInTheDocument()
         expect(screen.getByText(/Address/i)).toBeInTheDocument()
    })
})