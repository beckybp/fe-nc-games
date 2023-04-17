import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment";

export const CommentList = ({ comment_count }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [commentCount, setCommentCount] = useState(0);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) {
    return <p>Loading Reviews...</p>;
  }
  if (!isLoading) {
    return (
      <section id="comment-list">
        <h3>Comments</h3>
        <h4>Comment count: {comment_count + commentCount}</h4>
        <PostComment
          setComments={setComments}
          setCommentCount={setCommentCount}
        ></PostComment>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
          </ul>
        ) : (
          <p>no comments yet</p>
        )}
      </section>
    );
  }
};
