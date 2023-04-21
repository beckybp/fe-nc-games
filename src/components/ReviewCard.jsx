import { Link } from "react-router-dom";
import { convertCategories } from "../utils/utils";

export const ReviewCard = ({ review }) => {
  return (
    <section className="review-card">
      <li>
        <img
          className="review-img"
          src={review.review_img_url}
          alt={review.title}
        />

        <h3>{review.title}</h3>
        <h4>{review.owner}</h4>
<<<<<<< HEAD
        <p>category: {review.category}</p>
        <p>vote count: {review.votes}</p>
        <p>comment count: {review.comment_count}</p>
=======
        <p>Category: {convertCategories(review.category)}</p>
        <p>Votes: {review.votes}</p>
        <p>Comments: {review.comment_count}</p>
>>>>>>> 23389ebdc99cb18cd67a198304c0b2f38dff3cc7
        <Link to={`/reviews/${review.review_id}`}>
          <button>Read review</button>
        </Link>
      </li>
    </section>
  );
};
