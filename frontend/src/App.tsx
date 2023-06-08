import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ShoppingCartProvider } from './context/shoppingCartContext'
import { PaginationProvider } from './context/paginationContext'

const Login = lazy(() => import('./pages/Login'))
const Profile = lazy(() => import('./pages/Profile'))
const Navbar = lazy(() => import('./component/Navbar'))
const Contact = lazy(() => import('./pages/Contact'))
const Seller = lazy(() => import('./pages/Seller'))
const Product = lazy(() => import('./pages/Product'))
const Shopping = lazy(() => import('./pages/ShoppingCart'))


export default function App() {
  return (
    <PaginationProvider>
      <ShoppingCartProvider>

        <Suspense>

          <Routes>
            <Route path='/' element={<Login />} />

            <Route element={<Navbar />}>

              <Route path='/homepage' element={<Shopping />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />

              <Route path='/order' element={<Seller />} />
              <Route path='/add-product' element={<Product />} />

            </Route>

            <Route path='*' element={<div className='display-5'>404 Not Found</div>} />

          </Routes>
        </Suspense>
      </ShoppingCartProvider>
    </PaginationProvider>

  )
}
