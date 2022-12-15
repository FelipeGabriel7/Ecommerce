import React, { useEffect,  useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CardProduct } from '../../components/CardProduct'

export const Search = () => {


const[response , setResponse] = useState([])
const { search } = useLocation()
const query = new URLSearchParams(search);
const getQuery = query.get("q");

console.log(getQuery)

useEffect(() => {

  async function fetchData(){

    fetch(`https://fakestoreapi.com/products/category/${getQuery}`)
    .then(res => res.json())
    .then(respo => setResponse(respo))
  }

  fetchData()

}, [getQuery])


console.log(response)

  return (
    <div>
      {response.length === 0 && (
        <>
          <p className="categorySearch"> Não existe esta categoria de produtos , tente novamente. </p>
        </>
      )}
        {response && (
          <>
            <CardProduct product={response} />
          </>
        )}
    </div>
  )
}
