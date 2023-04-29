import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import { ReviewCard } from "./ReviewCard";
import { convertCategories } from "../utils/utils";
import { CategoryNavBar } from "./CategoryNavBar";
import { SortBy } from "./SortBy";
import { OrderBy } from "./OrderBy";

export const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();
  const [orderBy, setOrderBy] = useState("Desc");

  useEffect(() => {
    setIsLoading(true);
    getReviews(category).then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, [category]);

  console.log(orderBy);

  return (
    <main>
      <CategoryNavBar />
      <SortBy />
      <OrderBy setOrderBy={setOrderBy} />
      {isLoading ? (
        <p>Loading Reviews...</p>
      ) : (
        <>
          {category ? (
            <h2>{convertCategories(category)} Reviews</h2>
          ) : (
            <h2>All Reviews</h2>
          )}
          <section>
            <ul className="review-list">
              {reviews.map((review) => {
                return <ReviewCard key={review.review_id} review={review} />;
              })}
            </ul>
          </section>
        </>
      )}
    </main>
  );
};
