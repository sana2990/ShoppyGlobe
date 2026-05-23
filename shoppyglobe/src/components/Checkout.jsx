import { useLocation } from "react-router-dom";

function Checkout() {

    const location = useLocation();

    const { cart, totalPrice } = location.state;
    return (

        <div>

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

        </div>
            
    )
}

export default Checkout;