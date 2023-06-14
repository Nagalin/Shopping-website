import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import MyStore from './pages/MyStore';
import Protected from './features/authorization/component/Protected';
import Register from './pages/Register';
import { RegisterContextProvider } from './features/Registration/context/useRegister';

const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));
const Navbar = lazy(() => import('./component/Navbar'));
const Contact = lazy(() => import('./pages/Contact'));
const Seller = lazy(() => import('./pages/Seller'));
const Product = lazy(() => import('./pages/Product'));
const Shopping = lazy(() => import('./pages/ShoppingCart'));

export default function App() {
  return (
    <RegisterContextProvider>
    <ShoppingCartProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />

          
          <Route path="/register" element={<Register />} />
          

          <Route element={<Protected/>}>

          
            <Route element={<Navbar />}>
              <Route path="/homepage" element={<Shopping />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<Seller />} />
              <Route path="/add-product" element={<Product />} />
              <Route path="/my-store" element={<MyStore />} />
            </Route>

            </Route>
         
          

          <Route path="*" element={<div className="display-5">404 Not Found</div>} />
        </Routes>
      </Suspense>
    </ShoppingCartProvider>
    </RegisterContextProvider>
  );
}
