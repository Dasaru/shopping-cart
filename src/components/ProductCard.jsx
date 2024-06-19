import { useState, useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

export default function ProductCard({ product }) {
  const [value, setValue] = useState(1);
  const {id, title, price, description, category, image, rating} = product;
  const { cart, setCart } = useContext(GlobalStateContext);

  const handleChange = e => {
    let input = parseInt(e.target.value);
    if (e.target.value === "") input = 0;
    if (!isNaN(input) && input < 100) {
      setValue(input);
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  }

  const handleBlur = () => {
    if (value === 0) {
      setValue(1);
    }
  }

  const addValue = () => {
    setValue(prev => {
      return prev < 99 ? prev + 1 : 99;
    });
  };

  const subValue = () => {
    setValue(prev => {
      return prev > 1 ? prev - 1 : 1;
    });
  };

  const handleAddToCart = (e) => {
    let updatedCart = [...cart];
    let index = updatedCart.findIndex(product => product.id === id);
    if (index === -1) {
      setCart([...updatedCart, {id: id, quantity: value}]);
    } else {
      updatedCart[index].quantity = value;
      setCart(updatedCart);
    }
  }

  return (
    <div className="product-card">
      <img src={image} alt="product image" />
      <h2>{title}</h2>
      <textarea value={description} disabled />
      <div className="product-area">
        <span className="product-price">${price.toFixed(2)}</span>
        <div className="product-quantity">
          <button onClick={subValue} aria-label="Subtract">&minus;</button>
          <input
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value > 0 ? value : ""}
            aria-label="Quantity"
          />
          <button onClick={addValue} aria-label="Add">+</button>
        </div>
        <button className="product-add-btn" onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
}