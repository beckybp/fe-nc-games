import { convertCtreatedAt } from "../utils/utils";

export const CommentCard = ({ comment }) => {
  return (
    <section id="comment-card">
      <li>
        <h4>{comment.author}</h4>
        <p>{comment.body}</p>
        <p>{convertCtreatedAt(comment.created_at)}</p>
        <p>
          <b>Votes:</b> {comment.votes}
        </p>
      </li>
    </section>
  );
};
