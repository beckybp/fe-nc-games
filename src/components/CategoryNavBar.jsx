import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";
import { NavLink } from "react-router-dom";
import { convertCategories } from "../utils/utils";

export const CategoryNavBar = ({ setIsNavBarLoading, isNavBarLoading }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setIsNavBarLoading(true);
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsNavBarLoading(false);
    });
  }, [setIsNavBarLoading]);

  if (!isNavBarLoading) {
    return (
      <div id="category-filter-block">
        <label htmlFor="category-filter" className="label">
          Filter by category:
        </label>
        <ul className="nav-group" id="category-filter-select">
          <li>
            <NavLink to="/" className="nav-link" key="view-all">
              View All
            </NavLink>
          </li>

          {categories.map((category) => {
            return (
              <li>
                <NavLink
                  to={`/category/${category.slug}`}
                  className="nav-link"
                  key={category.slug}
                >
                  {convertCategories(category.slug)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};
