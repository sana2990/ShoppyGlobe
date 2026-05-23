import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../utils/cartSlice";


function ProductItem() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);

  useEffect(() => {

    async function fetchSingleProduct() {

      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

      const data = await response.json();

      setProduct(data);
    }

    fetchSingleProduct();

  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>

      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="250"
      />

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductItem;