import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Auth.module.css'

export const Login = () => {

  const[email , setEmail] = useState("")
  const[password , setPassword] = useState("");

  function handleSubmitLogin(){

  }


  return (
    <div className={styles.auth}>
      <h3 className={styles.title}> Realiza seu Login e venha adquirir seus produtos </h3>
      <form className={styles.form} onSubmit={handleSubmitLogin}>
        <label>
          Email
          <input type="email" placeholder="mail@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha
          <input type="password" placeholder='informe sua senha' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit" className={styles.btn}> Entrar </button> 
        <Link to="/register" className={styles.link}> Não possue conta ? Realize um cadastro.</Link>
      </form>
    </div>
  )
}
