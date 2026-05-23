import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem'
import Error from './components/Error'

import {Routes, Route} from "react-router-dom";
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:id" element={<ProductItem />}  />

          <Route path="/cart"
          element= {<Cart />} />
          <Route path="*"
            element={<ErrorPage />} />
        </Routes>
      
    </>
  )
}

export default App
