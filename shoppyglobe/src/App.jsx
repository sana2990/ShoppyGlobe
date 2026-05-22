import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'

import {Routes, Route} from "react-router-dom";
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  const [cart, setCart] = useState([]);

   const handleAddToCart = (product) => {

  const existingItem = cart.find(
    (item) => item.id === product.id
  );

  if (existingItem) {

    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: item.quantity + 1
          }
        : item
    );

    setCart(updatedCart);

  } else {

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ]);

  }
};

  const increaseQuantity = (id) => {

  const updatedCart = cart.map((item) =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  );

  setCart(updatedCart);
};

const decreaseQuantity = (id) => {

  const updatedCart = cart.map((item) =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );

  setCart(updatedCart);
};

const removeFromCart = (id) => {

  const updatedCart = cart.filter(
    (item) => item.id !== id
  );

  setCart(updatedCart);
};

  return (
    <>
      <Header cartCount={cart.length}/>
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:id" element={<ProductItem handleAddToCart={handleAddToCart} />}  />

          <Route path="/cart"
          element= {<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart} />} />
        </Routes>
      
    </>
  )
}

export default App
