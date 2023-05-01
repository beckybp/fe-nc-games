import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { NavLink } from "react-router-dom";
import { convertCategories } from "../utils/utils";

export const CategoryNavBar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (!isLoading) {
    return (
      <>
        <h4>Filter by category:</h4>
        <section className="nav-group">
          <NavLink to="/" className="nav-link" key="view-all">
            View All
          </NavLink>

          {categories.map((category) => {
            return (
              <NavLink
                to={`/category/${category.slug}`}
                className="nav-link"
                key={category.slug}
              >
                {convertCategories(category.slug)}
              </NavLink>
            );
          })}
        </section>
      </>
    );
  }
};
