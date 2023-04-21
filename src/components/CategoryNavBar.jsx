import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { NavLink } from "react-router-dom";

export const CategoryNavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  console.log(categories, "outside");

  return (
    <section className="nav-group">
      <nav>
        <NavLink to="/" className="nav-link" key="view-all">
          View all
        </NavLink>
        {categories.map((category) => {
          return (
            <NavLink
              to={`/category/${category.slug}`}
              className="nav-link"
              key={category.slug}
            >
              {category.slug}
            </NavLink>
          );
        })}
      </nav>
    </section>
  );
};
