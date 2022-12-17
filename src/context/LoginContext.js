import React, { useReducer } from "react";


const LoginState = {
  user: null,
  logged: false,
}

const reducerLogin = (state , action) => {
  switch(action.type){
      case 'NEW_USER':

       async function fetchData(){
        const req = await fetch(`https://fakestoreapi.com/users` , {
          method: 'POST',
          body: JSON.stringify(action.payload)
        })

        const res = await req.json();

        console.log(res)

        return {...state , user: res , logged: true}
       }

       fetchData()
       return;
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