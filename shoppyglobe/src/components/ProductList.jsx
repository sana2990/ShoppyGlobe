// React hook
import { useState } from "react";

// Custom hook for fetching products
import useProducts from "../hooks/useProducts";

// Product details component import
import ProductItem from "./ProductItem";

// React Router link component
import { Link } from "react-router-dom";

// Redux hook for accessing store data
import { useSelector } from "react-redux";

// CSS file for product list styling
import "./ProductList.css";

function ProductList() {

   // Fetching products, loading state, and errors from custom hook
  const { products, loading, error } = useProducts();

  // Getting search term from Redux store
const searchTerm = useSelector(
  (state) => state.cart.searchTerm
) || "";

  // Filtering products based on search input
  const filteredProducts = products.filter((product) =>
  product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
  );

  // Loading state while products are being fetched
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Error handling
  if (error) {
    return <h2>{error}</h2>;
  }

   return (
     // Main products container
    <div className="products-container">

      {/* Page heading */}
      <h1>Products</h1>

      {/* Product cards container */}
      <div className="product-card">

         {/* Looping through filtered products */}
        {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
        >

          {/* Single product item */}
          <div className="item">
            <h3>{product.title}</h3>

            <img
              src={product.thumbnail}
              alt={product.title}
              width="150"
            />

            <p>${product.price}</p>
          </div>
        </Link>
      ))}
      </div>
      
    </div>
  );
}

export default ProductList; 