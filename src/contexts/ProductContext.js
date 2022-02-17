import React, { createContext, useState } from 'react'
import data from '../data'

export const ProductContext = createContext()

export default function ProductProvider(props) {

    const [products] = useState(data)
    
    const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

    return (
        <ProductContext.Provider value={{ products, addItem }}>
            {props.children}
        </ProductContext.Provider>
    )
}