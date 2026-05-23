// React hooks
import { useEffect, useState } from "react";

// Hook for accessing route parameters
import { useParams } from "react-router-dom";

// Redux hook for dispatching actions
import { useDispatch } from "react-redux";

// Redux action for adding product to cart
import { addToCart } from "../utils/cartSlice";


function ProductItem() {
  // Getting product id from URL
  const { id } = useParams();

  // Redux dispatch function
  const dispatch = useDispatch();

  //state for storing single product data
  const [product, setProduct] = useState(null);

  // Runs when id changes
  useEffect(() => {

    // Function to fetch single product details
    async function fetchSingleProduct() {

      // API request using product id
      const response = await fetch(
        `https://dummyjson.com/products/${id}`
      );

       // Converting response into JSON
      const data = await response.json();

      // Saving product data in state
      setProduct(data);
    }

    // Calling fetch function
    fetchSingleProduct();

  }, [id]);

  // Loading message until product data arrives
  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {/*Product details */}
      <h1>{product.title}</h1>

      <img
        src={product.thumbnail}
        alt={product.title}
        width="250"
      />

      <p>{product.description}</p>

      <h3>${product.price}</h3>

      {/* Add product to cart */}
      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductItem;