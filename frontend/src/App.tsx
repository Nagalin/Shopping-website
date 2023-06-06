import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Shopping from './pages/ShoppingCart'
import Navbar from './component/Navbar'
import Contact from './pages/Contact'
import Seller from './pages/Seller'
import Product from './pages/Product'
import {ShoppingCartProvider} from './context/shoppingCartContext'

export default function App() {
  return (
    <ShoppingCartProvider>
    
      <Routes>
        <Route path='/' element={<Login />} />

        <Route  element={<Navbar/>}>
          <Route path='/homepage' element={<Shopping/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/contact' element={<Contact/>}/>

          <Route path='/order' element={<Seller/>}/>
          <Route path='/add-product' element={<Product/>}/>
          
        </Route>

        <Route path='*' element={<div className='display-5'>404 Not Found</div>}/>

      </Routes>
      </ShoppingCartProvider>
   
  )
}
