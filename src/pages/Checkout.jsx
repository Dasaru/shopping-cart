import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";
import CheckoutRow from "../components/CheckoutRow";

export default function Checkout() {
  const { cart, products } = useContext(GlobalStateContext); // TODO: USE THE CART INSTEAD OF PRODUCTS

  const cartSize = products.length; // TODO: Change to cart.length

  return (
    <div className="page-container checkout-page">
      {cartSize === 0 ? (
        <h1>Empty Cart</h1>
      ) : (
        <>
          <h1>Your Cart ({cartSize} items)</h1>
          <table>
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col" aria-label="Delete"></th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <CheckoutRow key={product.id} product={product} quantity={7} /> 
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}