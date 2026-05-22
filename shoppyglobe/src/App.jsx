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
    setCart([...cart, product]);
  };


  return (
    <>
      <Header cartCount={cart.length}/>
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:id" element={<ProductItem handleAddToCart={handleAddToCart} />}  />

          <Route path="/cart"
          element= {<Cart cart={cart} />} />
        </Routes>
      
    </>
  )
}

export default App
