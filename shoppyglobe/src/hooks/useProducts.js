// React hooks
import { useEffect, useState } from "react";

// Custom hook for fetching product data
function useProducts() {
  // State for storing products
  const [products, setProducts] = useState([]);

  // State for loading status
  const [loading, setLoading] = useState(true);

  // State for handling errors
  const [error, setError] = useState("");

  // Runs once when component mounts
  useEffect(() => {

    // Function to fetch products from API
    async function fetchProducts() {
      try {
        // API request
        const response = await fetch("https://dummyjson.com/products");

        // Checking if request failed
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        // Converting response to JSON
        const data = await response.json();

        // Saving products into state
        setProducts(data.products);
      } catch (err) {
        // Saving error message
        setError(err.message);
      } finally {
        //Stopping loading state
        setLoading(false);
      }
    }

    // Calling fetch function
    fetchProducts();
  }, []);

  // Returning values from custom hook
  return { products, loading, error };
}

export default useProducts;