import React from 'react'
import { BrowserRouter as Container, Routes, Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Login } from '../pages/Auth/Login'
import { Register } from '../pages/Auth/Register'
import { Cart } from '../pages/Cart/Cart'
import { Items } from '../pages/Home/Items'
import { Product } from '../pages/Product/Product'
import { Search } from '../pages/search/Search'

export const PublicRoutes = () => {
  return (
    <>
      <Container>
        <Navbar />
        <div className='container'>
          <Routes>
          <Route path="/product/:id" element={<Product />} />
            <Route path="/login" element={ <Login/> }/>
            <Route path="/register" element={<Register />} />
            <Route path="/items" element={<Items />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </>
  )
}
