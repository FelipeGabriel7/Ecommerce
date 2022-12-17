import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CardProduct } from '../../components/CardProduct'
import styles from './Search.module.css'

export const Search = () => {


  const [response, setResponse] = useState([])
  const [loading, setLoading] = useState(false)

  const { search } = useLocation()
  const query = new URLSearchParams(search);
  const getQuery = query.get("q");


  console.log(getQuery)

  useEffect(() => {

    async function fetchData() {

      setLoading(true)

      fetch(`https://fakestoreapi.com/products/category/${getQuery}`)
        .then(res => res.json())
        .then(respo => setResponse(respo))

      setLoading(false)
    }

    fetchData()

  }, [getQuery])


  console.log(response)

  return (
    <div>
      {loading && (
        <p className='categorySearch'> Carregando ... </p>
      )}

      {response.length === 0 && (
        <>
          <p className="categorySearch"> Não existe esta categoria de produtos , tente novamente. </p>
        </>
      )}
      {response.length > 0 && (
        <>
          <div className={styles.products}>
            <CardProduct product={response} />
            <h3 className={styles.productTitle}> Quantidade de Produtos: {response.length} </h3>
          </div>
        </>
      )}
    </div>
  )
}
