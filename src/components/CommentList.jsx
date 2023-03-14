import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import { CommentCard } from "./CommentCard";

export const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(review_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, [review_id]);

  return (
    <section>
      <h3>Comments</h3>
      {isLoading ? (
        <p>Loading reviews...</p>
      ) : (
        <ul>
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      )}
    </section>
  );
};
