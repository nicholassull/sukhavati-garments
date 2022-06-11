import CategoryItem from "../category-item/CategoryItem";
import './CategoryMenu.styles.scss';

const CategoryMenu = ({categories}) => {
  return (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
  );
}

export default CategoryMenu