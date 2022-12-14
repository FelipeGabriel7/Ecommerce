import React from 'react'
import { BrowserRouter as Container , Routes , Route } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Cart } from '../pages/Cart/Cart'
import { Home } from '../pages/Home/Home'
import { Product } from '../pages/Product/Product'
import { Search } from '../pages/search/Search'

export const PublicRoutes  = () => {
  return (
    <>
    <Container>
        <Navbar/> 
        <div className='container'>
        <Routes>
            <Route path="/" element={ <Home/>  }/>
            <Route path="/product/:id" element={<Product/> }/>
            <Route path="/cart" element={ <Cart/> } />
            <Route path="/search" element={ <Search/> } />
        </Routes>
        </div>
        <Footer/> 
    </Container>
    </>
  )
}
