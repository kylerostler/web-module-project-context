import React from 'react';
import { Route } from 'react-router-dom';
// import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import ProductProvider from './contexts/ProductContext'
import CartProvider from './contexts/CartContext';


function App() {

	return (
		<div className="App">
			<ProductProvider>
				<CartProvider>
					<Navigation />
						{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>
					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartProvider>
			</ProductProvider>
		</div>
	);
}

export default App;
