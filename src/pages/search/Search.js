import React, { useEffect,  useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Search = () => {


const[response , setResponse] = useState([])
const { search } = useLocation()
const query = search.slice(3)


useEffect(() => {
    async function fetchDataItem(){
        const req = await fetch(`https://fakestoreapi.com/products`)
        const res = await req.json();

        setResponse(res);
    }

    fetchDataItem();
} , [query, search])


const respVerify = response.find(resp => {
  if(resp.title === query || resp.category === query){
    return <p> {resp} </p>
  }
  return <p> Este item não existe </p>
})



  return (
    <div>{respVerify}</div>
  )
}
