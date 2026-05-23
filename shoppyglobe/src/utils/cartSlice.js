// Importing Redux Toolkit function used for creating slices
import { createSlice } from "@reduxjs/toolkit";

// Initial Redux state
const initialState = {
   // Stores cart items
  items: [],

  // Stores product search text
  searchTerm: "",
};

// Creating cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,

  // Reducer functions
  reducers: {

    // Adds product to cart
    addToCart: (state, action) => {

      // Checking if item already exists in cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      // If item exists, increase quantity
      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        // Otherwise add new product with quantity 1
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    // Updates search text in Redux store
    setSearchTerm: (state, action) => {

      state.searchTerm = action.payload;

    },

    // Increases quantity of selected item
    increaseQuantity: (state, action) => {

       // Finding matching cart item
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      // Increasing quantity
      if (item) {
        item.quantity += 1;
      }
    },

    // Decreases quantity of selected item
    decreaseQuantity: (state, action) => {

      // Finding matching cart item
      const item = state.items.find(
        (item) => item.id === action.payload
      );

      //condition to check if quantity cannot go below 1
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Removes item completely from cart
    removeFromCart: (state, action) => {

      // Filtering out selected item
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

// Exporting Redux actions
export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  setSearchTerm,
} = cartSlice.actions;

//exporting reducer
export default cartSlice.reducer;