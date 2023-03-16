import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

export const CommentAdder = ({ setComments }) => {
  const [newComment, setNewComment] = useState({
    username: "jessjelly",
    body: "",
  });
  const [loadingComment, setLoadingComment] = useState(null);
  const isComment = newComment.body.length === 0;

  const { review_id } = useParams();

  const onChange = (event) => {
    setNewComment({ ...newComment, body: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setLoadingComment("Comment loading");
    postComment(review_id, newComment).then((response) => {
      setComments((currentComments) => {
        setLoadingComment("Comment added");
        return [response, ...currentComments];
      });
    });
    // .catch(() => {
    //   setErr("We didn't register that, please try again");
    // });
    setNewComment({
      username: "jessjelly",
      body: "",
    });
  };

  return (
    <form onSubmit={onSubmit} className="form-style">
      <label htmlFor="comment">Comment here:</label>
      <textarea id="Comment" value={newComment.body} onChange={onChange} />
      <button type="submit" disabled={isComment}>
        Write your comment
      </button>
      {loadingComment === "Comment loading" ? <p>{loadingComment}</p> : null}
      {loadingComment === "Comment added" ? <p>{loadingComment}</p> : null}
      {/* {err ? <p>{err}</p> : null} */}
    </form>
  );
};
