import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


const NavBar = () => {
  return (
    <div className='text-left text-2xl'>
      <ul className='bg-slate-800 text-slate-200 inset-px'>
        <Link to= {'/shop'}>
        <li>Inicio</li>
        </Link>
        <li>Contacto</li>
        <li>Acerca de</li>
        <Link to={'/shop/:categoryId'}>
        <li>Electronica</li>
        </Link>
        <CartWidget/>
      </ul>
    </div>
  )
}

export default NavBar