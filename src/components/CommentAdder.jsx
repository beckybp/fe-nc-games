import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

export const CommentAdder = ({ setComments, user }) => {
  const [newComment, setNewComment] = useState({
    username: user,
    body: "",
  });
  const [loadingComment, setLoadingComment] = useState(null);
  const [formErr, setFormErr] = useState(null);

  const { review_id } = useParams();

  const onChange = (event) => {
    setNewComment({ ...newComment, body: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    validate(newComment.body);

    if (newComment.body.length > 0) {
      setLoadingComment("Comment loading");
      postComment(review_id, newComment).then((response) => {
        setComments((currentComments) => {
          setLoadingComment(null);
          return [response, ...currentComments];
        });
      });
      setNewComment({
        username: "jessjelly",
        body: "",
      });
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
        value={newComment.body}
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
