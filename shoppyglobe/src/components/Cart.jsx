function Cart({cart}) {
    return (
        <div>
            <h1>Cart</h1>

            {cart.length === 0? (<h3>Cart is empty</h3>): (
                cart.map((item) => (
                    <div key ={item.id}>
                        <h2>{item.title}</h2>

                        <img src={item.thumbnail} alt={item.title} width="150"></img>

                        <p>${item.price}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Cart;