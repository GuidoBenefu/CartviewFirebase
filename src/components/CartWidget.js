import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/useContext'

const CartWidget = () => {

  const {items} = useContext(CartContext)

  let itemsInCart = 0

  items.map((item) =>{
    itemsInCart = itemsInCart + item.counter
  })

  return (
    !itemsInCart ?
    ""
    :
    <div className='inline'>
      <div className='inline'>
        {itemsInCart}
      </div>
      <Link to ='/Cart'>
        <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png" className='w-6 h-6 inline' alt='Cart'/>
      </Link>
    </div>
  )
}

export default CartWidget