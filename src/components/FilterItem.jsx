import { useContext } from "react";
import { GlobalStateContext } from "../GlobalStateContext";

export default function FilterItem({ category, id }) {
  const { activeCategories, setActiveCategories } = useContext(GlobalStateContext);

  const handleChange = () => {
    if (activeCategories.some(item => item === category)) {
      // Remove category
      setActiveCategories(activeCategories.filter(item => item !== category));
    } else {
      // Add category
      setActiveCategories(prevCat => [...prevCat, category]);
    }
  };

  return (
    <div className="filter-item">
      <input
        type="checkbox"
        name={category}
        id={id}
        checked={activeCategories.some(item => item === category)}
        onChange={handleChange}
      />
      <label htmlFor={id}>{category}</label>
    </div>
  );
}