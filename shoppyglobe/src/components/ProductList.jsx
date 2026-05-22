import { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

function ProductList() {
  const { products, loading, error } = useProducts();

  //const [selectedProduct, setSelectedProduct] = useState(null);

  //const handleSelectProduct = (product) => {
   // setSelectedProduct(product);
  //};

  //const handleAddToCart = (product) => {
    //console.log("Added:", product);
  //};

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

   return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
        >
          <div>
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
  );
}

export default ProductList; 