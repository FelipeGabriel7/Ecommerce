import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import styles from './Auth.module.css'

export const Login = () => {

  const[email , setEmail] = useState("")
  const[password , setPassword] = useState("");
  const[error , setError] = useState("");
  const[sucess , setSucess] = useState("")
  const { dispatchLogin } = useContext(LoginContext)
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))



  function handleSubmitLogin(e){
    e.preventDefault();

    if(email === user.email && password === user.password){
        setSucess(" Logando usuário ... ")

        setTimeout(() => {
          dispatchLogin({type: 'LOGIN_USER'})
          navigate("/items")
        }, 4000)
    }else{
       return setError(" Ess usuário não existe ");
    }

    setEmail("")
    setPassword("")

  }


  return (
    <div className={styles.auth}>
      {error && <p className='msg-error'> {error} </p>}
      {sucess && <p className='msg-sucess'> {sucess} </p>}
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
