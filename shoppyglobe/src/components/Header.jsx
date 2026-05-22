import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Header() {
    return(
        <>
            <h1>Shoppy Globe</h1>
            <h3>HOME</h3>
            <h3>product List</h3>
            <div>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </>
    )
}

export default Header;