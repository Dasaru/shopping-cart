import { useState } from 'react';

export default function ProductCard({ product }) {
  const [value, setValue] = useState(1);
  const {id, title, price, description, category, image, rating} = product;

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

  return (
    <div className="product-card">
      <img src={image} alt="product image" />
      <h2>{title}</h2>
      <textarea value={description} disabled />
      <div className="product-area">
        <span className="product-price">${price.toFixed(2)}</span>
        <div className="product-quantity">
          <button onClick={subValue}>&minus;</button>
          <input
            type="text"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value > 0 ? value : ""}
          />
          <button onClick={addValue}>+</button>
        </div>
        <button className="product-add-btn">Add To Cart</button>
      </div>
    </div>
  );
}