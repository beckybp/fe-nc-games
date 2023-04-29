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

  console.log(categories);

  return (
    <section>
      {isLoading ? (
        <p>Loading Categories...</p>
      ) : (
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
      )}
    </section>
  );

  // return (
  //   <>
  //     <label htmlFor="category">Filter by Category:</label>
  //     <select id="category" defaultValue="default">
  //       <option value="default" key="no-select" disabled>
  //         Select a category
  //       </option>
  //       <option key="view-all">All reviews</option>
  //       {categories.map((category) => {
  //         return (
  //           <option value="category.slug">
  //             {convertCategories(category.slug)}
  //           </option>
  //         );
  //       })}
  //     </select>
  //   </>
  // );
};
