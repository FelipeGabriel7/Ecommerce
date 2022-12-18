import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import styles from './CardProduct.module.css'
import { BsStarFill , BsArrowUp} from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CardProduct = ({ product }) => {

  const navigate = useNavigate()
  const { dispatch } = useContext(CartContext);

  function handleDetails(id) {
    navigate(`/product/${id}`)
  }

  const showToastMessage = () => {
    toast.success(' Produto Adicionado ao Carrinho! ', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 600,
    });
  };



  function handleAddProduct(id) {

    const productSingle = {
      ...id,
      quantity: 1,
    }

    showToastMessage()
    dispatch({ type: 'ADD_PRODUCT', payload: productSingle });

  }

  function handleTopButton(){
    setTimeout(() => {
      window.scrollTo(0 , 0)
    }, 200)
  }


  return (
    <>
      <ToastContainer />
      <div onClick={handleTopButton} className={styles.returnTop}>
        <BsArrowUp className={styles.btnTop}/>
      </div>
      <div className={styles.CardProduct}>
        {product && product.map((prod) => (
          <div className={styles.card} key={prod.id}>
            <p className={styles.category}> {prod.category} </p>

            {prod.image && (
              <img className={styles.image} src={prod.image} alt={prod.title} />
            )}

            <p className={styles.titleCard}> {prod.title} </p>
            <div className={styles.actions}>
              <button onClick={() => handleDetails(prod.id)}> Details </button>
              <button onClick={() => handleAddProduct(prod)}> ADD </button>
            </div>
            <p className={styles.price}> $ {prod.price} <span> <BsStarFill /> {prod.rating.rate} </span> </p>
          </div>
          
        ))}
      </div>
    </>

  )
}
