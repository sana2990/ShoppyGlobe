import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {setSearchTerm} from "../utils/cartSlice.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
    const cart = useSelector(
      (state) => state.cart.items
    );

    const cartCount = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchTerm = useSelector((state) => state.cart.searchTerm);
    const [inputValue, setInputValue] = useState("");

    return(
        <div className="header">
             <div>
                    <label>Search:</label>
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                    <button type="button" onClick={() => {dispatch(setSearchTerm(inputValue));
                        navigate("/");
                    }}>Search</button>
                </div>
                <div>
                    <Link to="/">
                Home
            </Link>

            <Link
              to="/cart"
              style={{
                position: "relative",
                display: "inline-block",
                marginLeft: "20px"
              }}
            >
                
                <FontAwesomeIcon icon={faCartShopping} />

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
                        {cartCount}
                    </span>
                )}

            </Link>
                </div>
            
        </div>
    )
}

export default Header;