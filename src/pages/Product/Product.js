import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'
import { FiBox } from 'react-icons/fi'

import styles from './Product.module.css';
const url = `https://fakestoreapi.com/products`;


export const Product = () => {

    const { id } = useParams()
    const [productOne, setProductOne] = useState([]);
   
    useEffect(() => {
        async function fetchData() {
            const request = await fetch(`${url}/${id}`);
            const response = await request.json();

            setProductOne(response)
        }

        fetchData();
    }, [id]);

 
    return (
        <>
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

                      <Link to="/items" className={styles.buttonProduct}> Voltar </Link> 
                </div>
            </div>
        </>
    )
}
