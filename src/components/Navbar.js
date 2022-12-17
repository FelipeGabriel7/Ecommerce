import React, { useContext, useState , useRef } from 'react'
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
  const reference = useRef();

  function handleSubmit(e){
    e.preventDefault();

    navigate(`/search?q=${search}`)

    setSearch("");
    reference.current.focus();
    
  }

  return (
    <>
        <nav className={styles.navbar}>
            <Link className={styles.title} to="/items"> MyShop <span style={{color: 'turquoise' , fontWeight: 'bold'}}> Commerce </span> </Link>
            <div>
              <form  className={styles.search} onSubmit={handleSubmit}>
              <button className={styles.icon}> <BsSearch  /> </button>
                <input type="search" placeholder="busque por uma categoria" ref={reference} value={search} onChange={(e) =>  setSearch(e.target.value)}/> 
               
              </form>
            </div>
            <Link className={styles.cart}  to="/cart"> {products.length} <BsCart style={{color: 'turquoise' , fontWeight: 'bold'}}/> </Link>
        </nav>
    </>
  )
}
