import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductList.css";

function ProductList() {
  const { products, loading, error } = useProducts();

const searchTerm = useSelector(
  (state) => state.cart.searchTerm
) || "";

  const filteredProducts = products.filter((product) =>
  product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

   return (
    <div className="page">
      <h1>Products</h1>
      <div className="ProductList">
        {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
        >
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