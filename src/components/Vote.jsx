import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../utils/api";

export const Vote = ({ votes }) => {
  const [userVote, setUserVote] = useState(0);
  const [voteErr, setVoteErr] = useState(false);

  const { review_id } = useParams();

  const onClickIncrement = () => {
    setVoteErr(false);
    setUserVote(userVote + 1);
    patchVotes(review_id, 1).catch(() => {
      setUserVote(0);
      setVoteErr(true);
    });
  };

  const onClickDecrement = () => {
    setVoteErr(false);
    setUserVote(userVote - 1);
    patchVotes(review_id, -1).catch(() => {
      setUserVote(0);
      setVoteErr(true);
    });
  };

  return (
    <>
      <p>
        <b>Votes:</b> {votes + userVote}
      </p>
      <button onClick={onClickIncrement} disabled={userVote > 0}>
        Upvote
      </button>
      <button onClick={onClickDecrement} disabled={userVote < 0}>
        Downvote
      </button>
      {voteErr && (
        <p id="error-text">We didn't register that, please try again</p>
      )}
    </>
  );
};
