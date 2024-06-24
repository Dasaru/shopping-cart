import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { GlobalStateContext } from "../GlobalStateContext";

export default function Products() {
  const { products } = useContext(GlobalStateContext);

  return (
    <div className="page-container product-page" data-testid="product-page">
      {products.map(product => <ProductCard product={product} key={product.id} />)}
    </div>
  );
}