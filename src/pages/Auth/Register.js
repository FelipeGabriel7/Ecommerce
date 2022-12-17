import React, { useContext, useState } from 'react'
import styles from './Auth.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'

export const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [sucess, setSucess] = useState("")

  const navigate = useNavigate()

  const { dispatchLogin } = useContext(LoginContext);


  function setUser(date){
    fetch(`https://fakestoreapi.com/users` , {
      method: 'POST',
      body: JSON.stringify(date)
    })
    .then(res => res.json())
    .then(response => console.log(response))
  }


  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError(' As senhas precisam ser iguais ')
    }

    if(name.length < 6){
      return setError(" Informe um nome com pelo menos 6 caracteres ")
    }

    if (password.length < 6 || confirmPassword.length < 6) {
      return setError(" A senha deve possuir ao menos 6 caracteres ")
    }

  
    const userInformation = {
      name,
      email,
      password,
      id: generateRandomId(1000, 10)
    }

    setUser(userInformation)


    localStorage.setItem('user' , JSON.stringify(userInformation))
    setSucess(" Usuário cadastrado com sucesso !")

    setName("")
    setError("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")

    setTimeout(() => {
      dispatchLogin({ type: 'NEW_USER', payload: userInformation });
      navigate(`/items`)
    }, 2500)

  }

  function generateRandomId(max, min) {
    const random = Math.floor(Math.random() * (max - min) + min)
    return random;
  }

  return (
    <div className={styles.auth}>
      {error && <p className='msg-error'> {error} </p>}
      {sucess && <p className='msg-sucess'> {sucess}</p>}
      <h3 className={styles.title}> Venha se registrar utilize nosso comércio online </h3>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Nome
          <input type="text" placeholder="informe seu nome" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" placeholder="mail@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha
          <input type="password" placeholder='informe sua senha' required value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label>
          Confirme sua senha
          <input type="password" placeholder="confirme sua senha" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        <button className={styles.btn}> Cadastrar </button>
        <Link className={styles.link} to="/login"> Já possui uma conta faça login !</Link>
      </form>
    </div>
  )
}
