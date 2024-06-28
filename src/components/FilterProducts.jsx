import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";
import FilterItem from "./FilterItem";

export default function FilterProducts() {
  const { categories, activeCategories, setActiveCategories } = useContext(GlobalStateContext);

  const handleClear = () => {
    setActiveCategories([]);
  };

  return (
    <>
    {(categories.length === 0) ? (
      // No Categories to display
      <></>
    ) : (
      <div className="filter-container">
        <button onClick={handleClear}>clear</button>
        <div className="filter-categories">
          {categories.map(category => (
            <FilterItem
              category={category}
              id={category}
              key={category}
            />
          ))}
        </div>
      </div>
    )}
    </>
  );
}