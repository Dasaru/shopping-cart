import { Link } from "react-router-dom";

export default function Navbar() {
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
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
}