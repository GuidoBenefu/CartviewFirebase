import React from 'react'
import { Link } from 'react-router-dom'
//import ItemCount from './ItemCount'

const Item = ({title, img, precio, id}) => {
  return (
    <Link to={`/shop/item/${id}`}>
      <article className='inline-block text-center text-xl'>
          <h3 className=''>{title}</h3>
          <img src={img} alt="" className='w-60 h-60'/>
          <h4 className='underline'>${precio}</h4>
      </article>
    </Link>
  )
}

export default Item