import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart, BsSearch} from 'react-icons/bs'

// styles
import styles from './Navbar.module.css';
import { CartContext } from '../context/CartContext';

export const Navbar = () => {

  const { state } = useContext(CartContext);
  const { products } = state;
  const [ search , setSearch] = useState("")
  const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();

    navigate(`/search?q=${search}`)

    setSearch("")
  }

  return (
    <>
        <nav className={styles.navbar}>
            <Link className={styles.title} to="/"> MyShop <span style={{color: 'turquoise' , fontWeight: 'bold'}}> Commerce </span> </Link>
            <div>
              <form  className={styles.search} onSubmit={handleSubmit}>
              <button className={styles.icon}> <BsSearch  /> </button>
                <input type="search" placeholder="busque por uma categoria" value={search} onChange={(e) =>  setSearch(e.target.value)}/> 
               
              </form>
            </div>
            <Link className={styles.cart}  to="/cart"> {products.length} <BsCart style={{color: 'turquoise' , fontWeight: 'bold'}}/> </Link>
        </nav>
    </>
  )
}
