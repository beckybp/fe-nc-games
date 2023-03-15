import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../utils/api";

export const CommentAdder = () => {
  const [newComment, setNewComment] = useState("");
  const { review_id } = useParams();

  const onChange = (event) => {
    setNewComment(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const commentObj = { username: "jessjelly", body: newComment };
    postComment(review_id, commentObj);
    // .then((response) => {
    //   console.log(response);
    // });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="comment">Comment here:</label>
      <textarea
        id="Comment"
        value={newComment.body}
        maxLength="500"
        onChange={onChange}
      />
      <button type="submit">Post comment</button>
    </form>
  );
};
