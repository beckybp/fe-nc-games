import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getSingleReview(review_id).then((reviewData) => {
      setReview(reviewData);
    });
  }, [review_id]);

  const {
    title,
    category,
    designer,
    review_img_url,
    owner,
    review_body,
    created_at,
    votes,
    comment_count,
  } = review;

  return (
    <section>
      <h2>{title}</h2>
      <img src={review_img_url} alt={title} />
      <h3>Review by: {owner}</h3>
      <p>{created_at}</p>
      <p>
        <b>Category:</b> {category}
      </p>
      <p>
        <b>Designer:</b> {designer}
      </p>
      <p>{review_body}</p>
      <p>
        <b>Votes:</b> {votes}
      </p>
      <p>
        <b>Comment count:</b> {comment_count}
      </p>
    </section>
  );
};
