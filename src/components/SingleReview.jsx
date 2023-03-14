import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleReview } from "../utils/api";
import { convertCtreatedAt } from "../utils/utils";
import { CommentList } from "./CommentList";

export const SingleReview = () => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then((reviewData) => {
      setReview(reviewData);
      setIsLoading(false);
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

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoading) {
    const reviewCopy = { ...review };
    const dateUpdated = convertCtreatedAt(reviewCopy.created_at);

    return (
      <section>
        <h2>{title}</h2>
        <img src={review_img_url} alt={title} />
        <h3>Review by: {owner}</h3>
        <p>{dateUpdated}</p>
        <p>
          <b>Category:</b> {category}
        </p>
        <p>
          <b>Designer:</b> {designer}
        </p>
        <p id="p-review">{review_body}</p>
        <p>
          <b>Votes:</b> {votes}
        </p>
        <p>
          <b>Comment count:</b> {comment_count}
        </p>
        <CommentList />
        <Link to="/">
          <button>Back to all reviews</button>
        </Link>
      </section>
    );
  }
};
