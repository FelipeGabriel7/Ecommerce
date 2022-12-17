import React, { useReducer } from "react";


const LoginState = {
  user: [],
  logged: false,
}

const reducerLogin = (state , action) => {
  switch(action.type){
      case 'NEW_USER':
       return {...state , user: [...state.user , action.payload]  , logged: !state.logged};
      case 'LOGOUT':
        return {user: [] , logged: false}
      case 'LOGIN_USER':
        return {...state , logged: !state.logged}
    default:
      return state
  }
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