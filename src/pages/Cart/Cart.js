import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { AiFillDollarCircle, AiOutlinePlus, AiOutlineClose, AiOutlineMinus } from 'react-icons/ai';
import { BsFillEyeFill, BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import styles from './Cart.module.css'

export const Cart = () => {

  const { state, dispatch } = useContext(CartContext)
  const { products } = state;
  const [status, setStatus] = useState(false)


  const result = products.reduce((total, currentValue) => {
    return total += currentValue.price * currentValue.quantity;
  }, 0)


  function handleDeleteItem(id) {
    dispatch({ type: "DELETE_ITEM", id: id })
  }


  function handlePlusItem(product) {
    dispatch({ type: "INCREMENT_PRODUCT", payload: product })
  }


  function handleRemove() {
    dispatch({ type: 'REMOVE_ALL' })
  }


  function handleMinusItem(product) {
    dispatch({ type: "DECREMENT_PRODUCT", payload: product })
  }

  function handleCheckout() {
    setStatus(prevStatus => !prevStatus)
  }

  return (
    <>
      <div className={styles.component}>
        {products.length <= 0 && (
          <h3 className={styles.cartItem} style={{ textAlign: 'center' }}> Você ainda não adicionou nenhum produto </h3>
        )}

        {products.length > 0 && (
          <div className={styles.cartItem}>
            <h3 className={styles.title}> Confira os seus produtos Adicionados: </h3>
            <h4 className={styles.title}> Seus produtos: {products.length} </h4>


            {products && products.map(product => (
              <div key={product.id} className={styles.itemCart}>
                <p>{product.title} - <span styles={styles.itemQuantity}>({product.quantity})</span></p>
                <div className={styles.itemActions}>
                  <p className={styles.itemPrice}>  {product.price} <AiFillDollarCircle /> </p>
                  <Link className={styles.productView} to={`/product/${product.id}`}> <BsFillEyeFill />  </Link>
                  <AiOutlinePlus onClick={() => handlePlusItem(product)} />
                  <AiOutlineMinus onClick={() => handleMinusItem(product)} />
                  <AiOutlineClose onClick={() => handleDeleteItem(product.id)} />
                </div>
              </div>
            ))}


            <p className={styles.remove} onClick={() => handleRemove()}> Remove all <BsTrash /> </p>

            <button className={styles.checkout} onClick={handleCheckout}> Checkout </button>
          </div>
        )}
      </div>
      {status && (
          <>
            <div>
              <div className={styles.componentModal}></div>
              <div className={styles.modal}>
                <AiOutlineClose className={styles.close} onClick={() => setStatus(prevStatus => !prevStatus)} />
                <h3> Total a pagar: ${result.toFixed(2)}</h3>
                <button > Realizar Pagamento  </button>
              </div>
            </div>

          </>
        )}
    </>
    

  )
}
