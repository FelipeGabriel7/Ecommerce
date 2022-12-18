import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Initial.module.css'
import image from '../../assets/image-home.jpg'

export const Initial = () => {


  const [desc, setDesc] = useState(false)


  function handleDesc() {
    setDesc(prevDesc => !prevDesc)
  }


  return (
    <>
      <div className={styles.home}>
        <img src={image} alt={image} onMouseEnter={handleDesc}/>
        {!desc && (
          <div className={styles.componentImage}>
            <h2 className={styles.title}> Bem vindo ao nosso comércio ! </h2>
            <p className={styles.text}> Sua solução para facilitar suas compras online , venha <br />
              com a gente utilizar e facilitar seu dia a dia !
            </p>

            <div className={styles.links}>
              <Link className={styles.link} to="/register"> Registrar </Link>
              <Link className={styles.link} to="/login"> Realizar Login </Link>
            </div>
          </div>

        )}
      </div>
    </>
  )
}
