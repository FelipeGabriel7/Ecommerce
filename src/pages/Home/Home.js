import React, { useEffect, useState } from 'react'
import { CardProduct } from '../../components/CardProduct';

export const Home = () => {
  const[products , setProducts] = useState([])

  async function fetchData(){
    const request = await fetch(`https://fakestoreapi.com/products`);
    const response = await request.json();

    setProducts(response);
  }


  useEffect(() => {
    fetchData();
  }, [])

 

  return (
    <div>
      <CardProduct product={products}/>
    </div>
  )
}
