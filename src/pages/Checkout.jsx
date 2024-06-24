import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalStateContext } from "../GlobalStateContext";
import CheckoutRow from "../components/CheckoutRow";

export default function Checkout() {
  const { cart, products } = useContext(GlobalStateContext);

  const cartSize = cart.reduce((totalQty, product) => totalQty + product.quantity, 0);

  const cartSubtotal = cart.reduce((sum, cartItem) => {
    const productInfo = products.find(product => product.id === cartItem.id);
    return sum + (productInfo.price * cartItem.quantity);
  }, 0);

  const TAX_RATE = 0.07;
  const salesTax = cartSubtotal * TAX_RATE;

  return (
    <div className="page-container checkout-page" data-testid="checkout-page">
      {cart.length === 0 ? (
        <>
          <h1>Empty Cart</h1>
          <span><Link to="/">Go back to add more items!</Link></span>
        </>
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
              {
                cart.map(item => {
                  const product = products.find(product => item.id === product.id);
                  return <CheckoutRow key={item.id} product={product} quantity={item.quantity} /> 
                })
              }
            </tbody>
          </table>
          <div className="checkout-totals">
              <div>
                <span>Subtotal:</span>
                <span>${cartSubtotal.toFixed(2)}</span>
              </div>
              <hr />
              <div>
                <span>Sales Tax (7%):</span>
                <span>${salesTax.toFixed(2)}</span>
              </div>
              <hr />
              <div>
                <span>Grand Total:</span>
                <span className="checkout-grandtotal">${(cartSubtotal + salesTax).toFixed(2)}</span>
              </div>
          </div>
        </>
      )}
    </div>
  );
}