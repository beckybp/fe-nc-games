import { Link } from "react-router-dom";

export const ReviewCard = ({ review }) => {
  return (
    <section className="review-list">
      <li>
        <img
          className="review-img"
          src={review.review_img_url}
          alt={review.title}
        />

        <h3>{review.title}</h3>
        <h4>{review.owner}</h4>
        <p>{review.category}</p>
        <p>vote count: {review.votes}</p>
        <p>comment count: {review.comment_count}</p>
        <Link to={`/reviews/${review.review_id}`}>
          <button>Read review</button>
        </Link>
      </li>
    </section>
  );
};
