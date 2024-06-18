import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

export default function CheckoutRow({product, quantity}) {
  const { cart, setCart } = useContext(GlobalStateContext);

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
        {quantity}
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