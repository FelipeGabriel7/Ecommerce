import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import styles from './CardProduct.module.css'
import { BsStarFill } from 'react-icons/bs'

export const CardProduct = ({ product }) => {

    const navigate = useNavigate()
    const { dispatch } = useContext(CartContext);

    function handleDetails(id){
        navigate(`/product/${id}`)
    }

    function handleAddProduct(id){

        const productSingle = {
            ...id,
            quantity: 1,
        }

        dispatch({type: 'ADD_PRODUCT', payload: productSingle});
    }


    return (
        <div className={styles.CardProduct}>
            {product && product.map((prod) => (
                <div className={styles.card} key={prod.id}>
                    <p className={styles.category}> {prod.category} </p>

                        {prod.image && (
                            <img  className={styles.image} src={prod.image} alt={prod.title} />
                        )}
                        <div className={styles.actions}>
                            <button onClick={() => handleDetails(prod.id)}> Details </button>
                            <button onClick={() => handleAddProduct(prod)}> ADD </button>
                        </div>
                        <p className={styles.price}> $ {prod.price} <span> <BsStarFill/> {prod.rating.rate} </span> </p>
                </div>

            ))}
        </div>
    )
}
