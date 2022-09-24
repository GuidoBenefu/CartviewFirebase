import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        const found = items.find(item => item.id === id);
        return found
    }

    const addItem = (item, counter) => {
        isInCart(item.id)
        ?
        setItems(items.map((prod) => {
            if (prod.id === item.id) {
                prod.counter += counter
            }
            return prod
        }))
        :
        setItems([...items, {id: item.id, title: item.title, precio: item.precio, counter : counter}])
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    const clear = () => {
        setItems([])
    }

    return (
        <CartContext.Provider value= {{ items, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

