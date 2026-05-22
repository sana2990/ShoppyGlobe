import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header({ cartCount }) {
    return(
        <div>
            <Link to="/">
            Home
            </Link>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} />
                {cartCount > 0 && (
                    <span
                        style={{
                            top: "-10px",
                            right: "-10px",
                            background: "blue",
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
    )
}

export default Header;