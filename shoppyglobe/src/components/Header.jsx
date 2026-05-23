// Importing FontAwesome cart icon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing shopping cart icon
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

// Link component for page navigation
import { Link } from "react-router-dom";

// Redux hooks
import {useSelector, useDispatch} from "react-redux";

// Redux action for updating search
import {setSearchTerm} from "../utils/cartSlice.js";

// Hook for navigation
import { useNavigate } from "react-router-dom";

//hook for local state
import { useState } from "react";

//css file for header styling
import "./Header.css";

function Header() {
    // Getting cart items from Redux store
    const cart = useSelector(
      (state) => state.cart.items
    );

    // Calculating total number of items in cart
    const cartCount = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );

    //Redux dispatch function
    const dispatch = useDispatch();

    //navigate between pages
    const navigate = useNavigate();

    //accessing searchTerm from redux
    const searchTerm = useSelector((state) => state.cart.searchTerm);

    //Local state for search input field
    const [inputValue, setInputValue] = useState("");

    return(
        // Main header container
        <div className="header">

            {/* Search label */}
             <div className="search-box">
                    <label>Search:</label>

                    {/* Search input field */}
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                    
                    {/* Search button */}
                    <button type="button" onClick={() => {dispatch(setSearchTerm(inputValue));
                        navigate("/");
                    }}>Search</button>
                </div>

                 {/* Navigation links section */}
                <div>
                    
                    {/* Home page link */}
                    <Link to="/">Home</Link>

                    {/* Cart page link */}
                    <Link to="/cart"
                        style={{
                        position: "relative",
                        display: "inline-block",
                        marginLeft: "20px"
                    }} >
                
                {/* Cart icon */}
                <FontAwesomeIcon icon={faCartShopping} />

                 {/* Cart badge shown only if cart has items */}
                {cartCount > 0 && (

                    <span
                        style={{
                            position: "absolute",
                            top: "-10px",
                            right: "-10px",
                            background: "red",
                            color: "white",
                            borderRadius: "50%",
                            padding: "2px 6px",
                            fontSize: "12px"
                        }}
                    >
                        {/* Showing total quantity */}
                        {cartCount}
                    </span>
                )}

            </Link>
                </div>
            
        </div>
    )
}

export default Header;