import { useSelector,useDispatch } from "react-redux";

// Redux actions for cart functionality
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../utils/cartSlice";

// Checkout component import
import Checkout from "./Checkout";

//React rounter hook for navigation
import { useNavigate } from "react-router-dom";

function Cart() {

    //getting cart items fro  redux store  
    const cart = useSelector( (state) => state.cart.items
    );

    //used to dispatch redux actions
    const dispatch = useDispatch();

    //used for navigating between pages
    const navigate = useNavigate();

    // Calculating total cart amount
    // price × quantity for each item
    const totalPrice = cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );

    return (
        <div>

             {/* Cart page heading */}
            <h1>Cart</h1>

             {/* Showing total payable amount */}
            <h2>
              Total: ${totalPrice.toFixed(2)}
            </h2>

             {/* Checkout button appears only if cart has items */}
            {cart.length > 0 && (

        <button
          style={{
            padding: "10px 20px",
            marginBottom: "20px",
            cursor: "pointer"
          }}

          // Navigate to checkout page
          // Passing cart data and total amount
          onClick={() =>
            navigate("/checkout", {
            state: {cart,totalPrice,},})}>
              Checkout
        </button>

)}
            {/* If cart is empty */}
            {cart.length === 0 ? (

                <h3>Cart is empty</h3>

            ) : (

                // Looping through all cart items
                cart.map((item) => (

                    <div className="cart-item" key={item.id}>

                        <h2>{item.title}</h2>

                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          width="150"
                        />

                        <p>${item.price}</p>

                        {/* Decrease quantity button */}
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity(item.id))
                          }
                        >
                          -
                        </button>

                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                        />

                        {/* Increase quantity button */}
                        <button
                          onClick={() =>
                            dispatch(increaseQuantity(item.id))
                          }
                        >
                          +
                        </button>

                         {/* Remove item completely from cart */}
                        <button
                          onClick={() =>
                            dispatch(removeFromCart(item.id))
                          }
                        >
                          Remove
                        </button>
                    </div>
                    
                ))
                
            )}
            
            
        </div>
    );
}

export default Cart;