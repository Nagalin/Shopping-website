import React from 'react'
import { render } from '@testing-library/react'
import Seller from '../Seller'

test('Should render seller page', () => {
    const {getByRole} = render(<Seller />)
    expect(getByRole('button',{name : 'View buyer profile'})).toBeInTheDocument()
})