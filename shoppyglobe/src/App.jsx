import './App.css'

import {lazy, Suspense} from "react";

const Header = lazy(() =>   import('./components/Header'));
const ProductList = lazy(() => import('./components/ProductList'));
const ProductItem = lazy(() => import('./components/ProductItem'));
const Error = lazy(() => import('./components/Error'));

import {Routes, Route} from "react-router-dom";
import Cart from './components/Cart'
import Checkout from './components/Checkout';

function App() {

  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}></Suspense>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:id" element={<ProductItem />}  />

          <Route path="/cart"
          element= {<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="*"
            element={<Error />} />
        </Routes>
      
    </>
  )
}

export default App
