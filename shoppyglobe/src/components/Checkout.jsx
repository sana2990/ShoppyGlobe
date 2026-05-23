import { useLocation } from "react-router-dom";
import "./Checkout.css";

function Checkout() {

    const location = useLocation();

    const { cart, totalPrice } = location.state;
    return (

        <div class="checkout">

            <h1>Checkout</h1>

            <h2>
              Total Amount: ${totalPrice.toFixed(2)}
            </h2>

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
            <div className="payment">
                <h3>Payment: </h3>
                <button>Pay Using Credit/Debit Card</button>
                <br />
                <button>Pay Using any UPI</button>
                <br />
                <button>Pay using COD</button>
            </div>

        </div>
            
    )
}

export default Checkout;