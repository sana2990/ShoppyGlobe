import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'

import {Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:id" element={<ProductItem />}  />
        </Routes>
      
    </>
  )
}

export default App
