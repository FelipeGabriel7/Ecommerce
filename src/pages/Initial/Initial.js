import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Initial.module.css'

export const Initial = () => {
  return (
    <div className={styles.home}>
      <h2 className={styles.title}> Bem vindo ao nosso comércio ! </h2>
      <div className={styles.links}>
        <Link className={styles.link} to="/register" > Realizar Login </Link>
        <Link className={styles.link} to="/login" > Cadastrar </Link>
      </div>
    </div>
  )
}
