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
        <p>vote count: {review.votes}</p>
        <p>comment count: {review.comment_count}</p>
      </li>
      <button>View review</button>
    </section>
  );
};
