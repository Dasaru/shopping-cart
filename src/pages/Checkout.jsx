import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";
import CheckoutRow from "../components/CheckoutRow";

export default function Checkout() {
  const { cart, products } = useContext(GlobalStateContext);

  const cartSize = cart.reduce((totalQty, product) => totalQty + product.quantity, 0);

  return (
    <div className="page-container checkout-page">
      {cart.length === 0 ? (
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
              {
                cart.map(item => {
                  const product = products.find(product => item.id === product.id);
                  return <CheckoutRow key={item.id} product={product} quantity={item.quantity} /> 
                })
              }
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}