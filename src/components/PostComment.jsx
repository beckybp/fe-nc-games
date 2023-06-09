import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

const user = "jessjelly";

export const PostComment = ({ setComments, setCommentCount }) => {
  const [newComment, setNewComment] = useState("");
  const [loadingComment, setLoadingComment] = useState(false);
  const [formErr, setFormErr] = useState(null);
  const [postSuccess, setPostSuccess] = useState(false);

  const { review_id } = useParams();

  const onChange = (event) => {
    setNewComment(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    validate(newComment);
    if (newComment.length > 0) {
      setLoadingComment(true);
      postComment(review_id, { username: user, body: newComment }).then(
        (response) => {
          setPostSuccess(true);
          setLoadingComment(false);
          setComments((currentComments) => {
            return [response, ...currentComments];
          });
          setCommentCount((currCommentCount) => {
            return currCommentCount + 1;
          });
        }
      );
      setNewComment("");
    }
  };

  useEffect(() => {
    if (postSuccess) {
      setTimeout(() => {
        setPostSuccess(false);
      }, 5000);
    }
  }, [postSuccess]);

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
        maxLength={200}
      />
      {formErr === "Please add your comment" ? (
        <p id="error-comment">{formErr}</p>
      ) : null}
      {!loadingComment && (
        <button type="submit" className="submit-button">
          Submit
        </button>
      )}
      {loadingComment && (
        <button disabled className="submit-button">
          Submitting...
        </button>
      )}
      {postSuccess && <p id="success-comment">Success, post added</p>}
    </form>
  );
};
