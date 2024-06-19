import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

export default function CheckoutRow({product, quantity}) {
  const { cart, setCart } = useContext(GlobalStateContext);

  const productIndex = cart.find(item => item.id === product.id);

  const addValue = () => {
    let updatedCart = [...cart];
    const index = cart.findIndex(item => item.id === product.id);
    if (updatedCart[index].quantity < 99) {
      updatedCart[index].quantity++;
      setCart(updatedCart);
    }
  };

  const subValue = () => {
    let updatedCart = [...cart];
    const index = cart.findIndex(item => item.id === product.id);
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCart(updatedCart);
    }
  };

  const handleDelete = e => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <tr>
      <td>
        <div className="checkout-item">
          <img src={product.image} alt="product image" />
          {product.title}
        </div>
      </td>
      <td>${product.price.toFixed(2)}</td>
      <td>
        <div className="checkout-quantity">
          <button onClick={subValue} aria-label="Subtract">&minus;</button>
          <span aria-label="Quantity">{quantity}</span>
          <button onClick={addValue} aria-label="Add">+</button>
        </div>
      </td>
      <td>
        ${(product.price * quantity).toFixed(2)}
      </td>
      <td>
        <button
          className="checkout-delete-btn"
          onClick={handleDelete}
          aria-description="Remove this product from cart"
        >X</button>
      </td>
    </tr>
  );
}