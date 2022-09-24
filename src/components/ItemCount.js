import React, { useState } from 'react'

const ItemCount = ( {item, Stock, Initial, addItem} ) => {

    const [counter, setCounter] = useState(1)
    
    const SumaCantidad = () => {
        if (counter < Stock) {
            setCounter(counter + 1)   
        }
    }
        
     const RestaCantidad = () => {
        if (counter <= Stock) {
            if (counter > 0) {
                setCounter(counter - 1)
            }   
        }
    }


    return (
    <>
        <div className='m-5'>
            <button onClick={SumaCantidad} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded'>+</button>
            <strong>Cantidad: {counter}</strong>
            <button onClick={RestaCantidad} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded'>-</button>
        </div>
        {
            counter > 0 ?
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded' onClick={() => addItem(item, counter)}>
                Añadir al Carrito
            </button>
            :
            ""
        }
    </>
    )
}    
export default ItemCount

