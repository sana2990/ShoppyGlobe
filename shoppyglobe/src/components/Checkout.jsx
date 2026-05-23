import { useLocation } from "react-router-dom";

// CSS file for checkout page styling
import "./Checkout.css";

function Checkout() {

    // Accessing data passed through navigation
    const location = useLocation();

    // Extracting cart items and total amount
    const { cart, totalPrice } = location.state;
    return (

        // Main checkout container
        <div class="checkout">

             {/* Checkout page heading */}
            <h1>Checkout</h1>

            {/* Displaying total payable amount */}
            <h2>
              Total Amount: ${totalPrice.toFixed(2)}
            </h2>

             {/* Looping through all cart items */}
            {cart.map((item) => (

                <div key={item.id}>

                    <h3>{item.title}</h3>

                    <p>
                      Quantity: {item.quantity}
                    </p>

                    <p>
                      Price: ${item.price}
                    </p>

                </div>

            ))}

            {/* Payment options section */}
            <div className="payment">

                {/* Card payment button */}
                <h3>Payment: </h3>
                <button>Pay Using Credit/Debit Card</button>
                <br />
                {/* UPI payment button */}
                <button>Pay Using any UPI</button>
                <br />

                {/* COD payment button */}
                <button>Pay using COD</button>
            </div>

        </div>
            
    )
}

export default Checkout;