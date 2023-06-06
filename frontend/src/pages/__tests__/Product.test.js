import React from 'react';
import { fireEvent, render, screen,act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Product from '../Product';
const mockPicture = new File([''], 'mock.jpg', { type: 'image/jpeg' });
describe('Product', () => {
  test('renders the product form', async() => {
    render(<Product />);

    const productNameInput = screen.getByPlaceholderText('Enter your product name');
    const productPriceInput = screen.getByPlaceholderText('Enter your product price');
    const productImageInput = screen.getByPlaceholderText('Enter your product image');
    const addButton = screen.getByRole('button', { name: 'Add a new product' });

    expect(productNameInput).toBeInTheDocument();
    expect(productPriceInput).toBeInTheDocument();
    expect(productImageInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();

    act(()=>{
        fireEvent.change(productNameInput,{target:{value: 'myproduct'}})
        fireEvent.change(productPriceInput,{target:{value: 5.5}})
    
    })

    await userEvent.upload(productImageInput, mockPicture);

    expect(productNameInput.value).toBe('myproduct')
    expect(productPriceInput.value).toBe('5.5')
    expect(productImageInput.files).toHaveLength(1)
  });
});
