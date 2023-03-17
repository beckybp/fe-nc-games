import { convertCreatedAt } from "../utils/utils";

export const CommentCard = ({ comment }) => {
  return (
    <section id="comment-card">
      <li>
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
        <p>{convertCreatedAt(comment.created_at)}</p>
      </li>
    </section>
  );
};
