import React from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {


  function handleSubmit(e){
     e.preventDefault();
  }

  return (
    <div>
        <h3> Venha se registrar utilize nosso comércio online </h3>

        <form onSubmit={handleSubmit}>
            <label>
              Nome
              <input type="text" placeholder="informe seu nome" />
            </label>
            <label>
              Email
              <input type="email" placeholder="mail@example.com" required />
            </label>
            <label>
              Senha
              <input type="password" placeholder='informe sua senha' required />
            </label>
            <label>
              <input type="password" placeholder="confirme sua senha" required /> 
            </label>
            <input type="submit" value=" Cadastrar " />
            <Link> Já possui uma conta faça login !</Link>
        </form>
    </div>
  )
}
