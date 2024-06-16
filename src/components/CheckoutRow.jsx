import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

export default function CheckoutRow({product, quantity}) {

  const { cart, setCart } = useContext(GlobalStateContext);

  //TODO: update the Cart and setCart properties.
  

  const handleChange = e => {
    //TODO: call setCart instead and update quantity
    // let input = parseInt(e.target.value);
    // if (e.target.value === "") input = 0;
    // if (!isNaN(input) && input < 100) {
    //   setValue(input);
    // }
  };

  const handleFocus = (e) => {
    e.target.select();
  }

  const handleBlur = () => {
    //TODO: call setCart instead and update quantity
    // if (value === 0) {
    //   setValue(1);
    // }
  }

  const addValue = () => {
    //TODO: call setCart instead and update quantity
    // setValue(prev => {
    //   return prev < 99 ? prev + 1 : 99;
    // });
  };

  const subValue = () => {
    //TODO: call setCart instead and update quantity
    // setValue(prev => {
    //   return prev > 1 ? prev - 1 : 1;
    // });
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
        <div className="product-quantity">
          <button onClick={subValue}>&minus;</button>
          <input
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={quantity}
          />
          <button onClick={addValue}>+</button>
        </div>
      </td>
      <td>
        ${(product.price * quantity).toFixed(2)}
      </td>
      <td>
        <button className="checkout-delete-btn" aria-description="Remove this product from cart">X</button>
      </td>
    </tr>
  );
}