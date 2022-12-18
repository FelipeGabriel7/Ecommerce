import React, { useContext, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsCart, BsSearch } from 'react-icons/bs'
import { TbMenu } from 'react-icons/tb'
import { AiOutlineClose } from 'react-icons/ai'

// styles
import styles from './Navbar.module.css';
import { CartContext } from '../context/CartContext';
import { LoginContext } from '../context/LoginContext';

export const Navbar = () => {

  const { stateLogin, dispatchLogin } = useContext(LoginContext)
  const { state, dispatch } = useContext(CartContext);
  const { products } = state;
  const [search, setSearch] = useState("")
  const [menu, setMenu] = useState(false);

  const navigate = useNavigate();
  const reference = useRef();
 
  function handleSubmit(e) {
    e.preventDefault();

    navigate(`/search?q=${search}`)

    setSearch("");
    reference.current.focus();

  }

  function handleLogout() {
    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALL' })
      dispatchLogin({ type: 'LOGOUT' })
    }, 2000)

  }

  function handleMenu(){
    setMenu(prevMenu => !prevMenu)
  }

  return (
    <>
      {stateLogin.logged && (
        <>
          <nav className={styles.navbar}>
            <Link className={styles.title} to="/items"> MyShop <span style={{ color: 'turquoise', fontWeight: 'bold' }}> Commerce </span> </Link>
            <div>
              <form className={styles.search} onSubmit={handleSubmit}>
                <button className={styles.icon}> <BsSearch /> </button>
                <input type="search" placeholder="busque por uma categoria" ref={reference} value={search} onChange={(e) => setSearch(e.target.value)} />
              </form>
            </div>

            <div onClick={handleMenu}>
              {!menu && (
                <AiOutlineClose style={{color: '#fff'}} className={styles.mobileMenu} />
              )}

              {menu  && (
                <TbMenu className={styles.mobileMenu} />
              )}
            </div>

            {!menu && (
              <>
                <div className={styles.linksNavbar}>
                  <Link className={styles.cart} to="/cart"> {products.length} <BsCart style={{ color: 'turquoise', fontWeight: 'bold' }} /> </Link>
                  <Link className={styles.link} onClick={handleLogout}> Sair </Link>
                </div>
              </>
            )}



          </nav>

        </>
      )}

      {!stateLogin.logged && (
        <>
          <nav className={styles.navbar}>
            <Link className={styles.title} to="/items"> MyShop <span style={{ color: 'turquoise', fontWeight: 'bold' }}> Commerce </span> </Link>
            <div className={styles.forms}>
              <Link to="/login" className={styles.link}> Login </Link>
              <Link to="/register" className={styles.link}> Register </Link>
            </div>
          </nav>
        </>
      )}
    </>
  )
}
