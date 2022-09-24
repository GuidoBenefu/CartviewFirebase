import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import prodJson from "../prod.json"

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])

  const getProduct = (data, time) => 
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        if(data){
          resolve(data)
        }else {
          reject("Error")
        }
      }, time);
    })

    useEffect(() => {
      getProduct(prodJson, 2000)
        .then((res) => {
          setProducts(res)
        })
        .catch((err) => console.log(err, "No hay productos"))
    }, [])

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer