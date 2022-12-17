import React, { useReducer } from "react";


const reducerLogin = (state , action) => {
  switch(action.type){
    default:
      return state
  }
}

const LoginState = {
    user: [],
    logged: false,
    error: false,
    sucess: true,
}

export const LoginContext = React.createContext();

export const LoginProvider = ({ children }) => {
  const[stateLogin , dispatchLogin] = useReducer(reducerLogin , LoginState)


  return(
    <LoginContext.Provider value={{stateLogin , dispatchLogin}}>
      {children}
    </LoginContext.Provider>
  )
}