import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

export const CategoryNavBar = () => {
  const [categories, setCategories] = useState([]);
  // const [activeCategory, setActiveCategory] = useState(["View All"]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, [categories]);

  return (
    <section className="nav-group">
      <ul>
        <Link to="/" className="nav-link">
          View all
        </Link>
        {categories.map((category) => {
          return (
            <li className="nav-link">
              <Link to={`/category/${category.slug}`}>{category.slug}</Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
