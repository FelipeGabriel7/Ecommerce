import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsFillStarFill , BsBoxArrowInLeft } from 'react-icons/bs'
import { FiBox } from 'react-icons/fi'

import styles from './Product.module.css';
import { CartContext } from '../../context/CartContext';
const url = `https://fakestoreapi.com/products`;


export const Product = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [productOne, setProductOne] = useState([]);
    const { dispatch } = useContext(CartContext)


    useEffect(() => {
        async function fetchData() {
            const request = await fetch(`${url}/${id}`);
            const response = await request.json();

            setProductOne(response)
        }

        fetchData();
    }, [id]);

    function handleReturn(){
        setTimeout(() => {
            navigate("/")
        }, 300);
    }


    function handleAdd(id){
        dispatch({type: 'ADD_PRODUCT', payload: id});
    }

    return (
        <>
            <button className={styles.backPage} onClick={handleReturn}> <BsBoxArrowInLeft/> Retornar a página inicial </button>
            <div className={styles.item}>


                {productOne.image && (
                    <img src={productOne.image} alt={productOne.title} />
                )}
                <div className={styles.itemText}>


                    <h2 className={styles.title}> {productOne.title} </h2>
                    <p> {productOne.category} </p>
                    <p className={styles.description}> {productOne.description} </p>

                    {productOne.rating && (
                        <div className={styles.avaliate}>
                            <p> <BsFillStarFill /> {productOne.rating.rate} </p>
                            <p> <FiBox /> {productOne.rating.count} </p>
                        </div>
                    )}

                    <button className={styles.buttonProduct} onClick={() => handleAdd(productOne)}> ADD Product </button>
                </div>
            </div>
        </>
    )
}
