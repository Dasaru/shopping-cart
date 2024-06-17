import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

export default function Navbar() {
  const { cart } = useContext(GlobalStateContext);

  const cartSize = cart.reduce((totalQty, product) => totalQty + product.quantity, 0);

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li className="nav-checkout">
          <Link to="/checkout">
            <div className="cart-icon">
              <img src="/cart.png" alt="shopping cart icon" />
              {cartSize > 0 && <span className="cart-icon-qty">{cartSize}</span>}
            </div>
            View Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}