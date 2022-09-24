import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
  return (
    <div>
        {products.length ? (
            products.map((product) => <Item key={product.id} {...product}/>)
        ) : (
            <h3 className='underline'>Loading...</h3>
        )}
    </div>
  )
}

export default ItemList