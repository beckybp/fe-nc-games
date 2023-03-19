import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";

export const CategorySelector = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, [categories]);

  return (
    <section>
      <ul>
        {categories.map((category) => {
          return (
            <li>
              <p>{category.slug}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
