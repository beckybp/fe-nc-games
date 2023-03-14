export const ReviewCard = ({ review }) => {
  return (
    <li className="review-list">
      <img
        className="review-img"
        src={review.review_img_url}
        alt={review.title}
      />

      <h3>{review.title}</h3>
      <p>{review.owner}</p>
      <p>vote count: {review.votes}</p>
      <p>comment count: {review.comment_count}</p>
    </li>
  );
};
