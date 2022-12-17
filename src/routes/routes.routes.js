import React, { useContext } from 'react'
import { BrowserRouter as Container, Routes, Route, Navigate } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { LoginContext } from '../context/LoginContext'
import { Login } from '../pages/Auth/Login'
import { Register } from '../pages/Auth/Register'
import { Cart } from '../pages/Cart/Cart'
import { Items } from '../pages/Home/Items'
import { Product } from '../pages/Product/Product'
import { Search } from '../pages/search/Search'

export const PublicRoutes = () => {

  const { stateLogin } = useContext(LoginContext);


  return (
    <>
      <Container>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/product/:id" element={stateLogin.logged ? <Product /> : <Navigate to="/login" />} />
            <Route path="/login" element={!stateLogin.logged ? <Login /> : <Navigate to="/items" />} />
            <Route path="/register" element={!stateLogin.logged ? <Register /> : <Navigate to="/items" />} />
            <Route path="/items" element={stateLogin.logged ? <Items /> : <Navigate to="/login" />} />
            <Route path="/cart" element={stateLogin.logged ? <Cart /> : <Navigate to="/login" />} />
            <Route path="/search" element={stateLogin.logged ? <Search /> : <Navigate to="/login" />} />
          </Routes>
        </div>
        <Footer />
      </Container>
    </>
  )
}
