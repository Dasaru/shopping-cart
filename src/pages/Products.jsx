import { useContext } from "react";
import FilterProducts from "../components/FilterProducts";
import ProductCard from "../components/ProductCard";
import { GlobalStateContext } from "../GlobalStateContext";

export default function Products() {
  const { products, activeCategories } = useContext(GlobalStateContext);

  return (
    <div className="page-container product-page" data-testid="product-page">
      <FilterProducts />
      {products.map(product => (
        <ProductCard
          product={product}
          key={product.id}
          visible={
            (activeCategories.length === 0) ? (
              true
            ) : (
              activeCategories.some(item => item === product.category) ? true : false
            )
          }
        />
      ))}
    </div>
  );
}