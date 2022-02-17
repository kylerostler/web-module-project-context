import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider (props) {
    const [cart, setCart] = useState([]);

    const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

    return(
        <CartContext.Provider value={{ cart, setCart, addItem }}>
            {props.children}
        </CartContext.Provider>
    )
}