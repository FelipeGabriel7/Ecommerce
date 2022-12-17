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

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError(' As senhas precisam ser iguais ')
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

    dispatchLogin({ type: 'NEW_USER', payload: userInformation })

    setSucess(" Usuário cadastrado com sucesso ")
    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")

    setTimeout(() => {
      navigate(`/items`)
    }, 200)

  }


  function generateRandomId(max, min) {
    const random = Math.floor(Math.random() * (max - min) + min)
    return random;
  }

  return (
    <div className={styles.auth}>
      {error && <p> {error} </p>}
      {sucess && <p> {sucess} </p>}
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
        <button className={styles.btn} type="submit"> Cadastrar </button>
        <Link className={styles.link} to="/login"> Já possui uma conta faça login !</Link>
      </form>
    </div>
  )
}
