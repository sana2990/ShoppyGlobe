function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity
}) {

    return (
        <div>

            <h1>Cart</h1>

            {cart.length === 0 ? (

                <h3>Cart is empty</h3>

            ) : (

                cart.map((item) => (

                    <div key={item.id}>

                        <h2>{item.title}</h2>

                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          width="150"
                        />

                        <p>${item.price}</p>

                        <button
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>

                        <input
                          type="number"
                          value={item.quantity}
                          readOnly
                        />

                        <button
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>

                    </div>
                ))
            )}

        </div>
    );
}

export default Cart;