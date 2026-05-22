import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <Link to="/">
            Home
            </Link>
            <Link to="/cart">Cart</Link>
        </div>
    )
}

export default Header;