import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

const user = "jessjelly";

export const CommentAdder = ({ setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [loadingComment, setLoadingComment] = useState(null);
  const [formErr, setFormErr] = useState(null);

  const { review_id } = useParams();

  const onChange = (event) => {
    setNewComment(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    validate(newComment);
    if (newComment.length > 0) {
      setLoadingComment("Comment loading");
      postComment(review_id, { username: user, body: newComment }).then(
        (response) => {
          setComments((currentComments) => {
            setLoadingComment(null);
            return [response, ...currentComments];
          });
        }
      );
      setNewComment("");
    }
  };

  const validate = (comment) => {
    if (comment.length === 0) {
      setFormErr("Please add your comment");
    }
    if (comment.length > 0) {
      setFormErr(null);
    }
  };

  return (
    <form onSubmit={onSubmit} className="form-style">
      <label htmlFor="comment">Write your comment:</label>
      <textarea
        id="Comment"
        value={newComment}
        placeholder="Your comment here..."
        onChange={onChange}
      />
      {formErr === "Please add your comment" ? (
        <p id="error-comment">{formErr}</p>
      ) : null}
      <button type="submit">Submit</button>
      {loadingComment === "Comment loading" ? <p>{loadingComment}</p> : null}
      {loadingComment === "Comment added" ? <p>{loadingComment}</p> : null}
    </form>
  );
};
