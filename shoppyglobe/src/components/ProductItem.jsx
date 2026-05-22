import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductItem() {
  const { id } = useParams();

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

  const handleAddToCart = () => {
    console.log("Added to cart:", product);
  };

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

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;