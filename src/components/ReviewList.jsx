import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { ReviewCard } from "./ReviewCard";

export const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewsFromApi) => {
      setReviews(reviewsFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </main>
  );
};
