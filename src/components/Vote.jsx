import { useState } from "react";
import { useParams } from "react-router-dom";
import { patchVotes } from "../utils/api";

export const Vote = ({ votes }) => {
  const [userVote, setUserVote] = useState(0);
  const [upvoteButton, setUpvoteButton] = useState("Upvote");
  const [downvoteButton, setDownvoteButton] = useState("Downvote");
  const [voteErr, setVoteErr] = useState(false);

  const { review_id } = useParams();

  const updateVote = (number) => {
    setUserVote((currVote) => {
      return currVote + number;
    });
  };

  const Increment = () => {
    if (userVote === 0) {
      setVoteErr(false);
      setUpvoteButton("Cancel upvote");
      updateVote(1);
      patchVotes(review_id, 1).catch(() => {
        setUserVote(0);
        setVoteErr(true);
        setUpvoteButton("Upvote");
      });
    } else if (userVote === 1) {
      setVoteErr(false);
      setUpvoteButton("Upvote");
      updateVote(-1);
      patchVotes(review_id, -1).catch(() => {
        setUserVote(userVote);
        setVoteErr(true);
        setUpvoteButton("Cancel upvote");
      });
    } else if (userVote === -1) {
      setVoteErr(false);
      setUpvoteButton("Cancel upvote");
      setDownvoteButton("Downvote");
      updateVote(2);
      patchVotes(review_id, 2).catch(() => {
        setUserVote(userVote);
        setVoteErr(true);
        setUpvoteButton("Upvote");
        setDownvoteButton("Cancel downvote");
      });
    }
  };

  const Decrement = () => {
    if (userVote === 0) {
      setVoteErr(false);
      setDownvoteButton("Cancel downvote");
      updateVote(-1);
      patchVotes(review_id, -1).catch(() => {
        setUserVote(0);
        setVoteErr(true);
        setDownvoteButton("Downvote");
      });
    } else if (userVote === -1) {
      setVoteErr(false);
      setDownvoteButton("Downvote");
      updateVote(1);
      patchVotes(review_id, 1).catch(() => {
        setUserVote(userVote);
        setVoteErr(true);
        setDownvoteButton("Cancel downvote");
      });
    }
    if (userVote === 1) {
      setVoteErr(false);
      setDownvoteButton("Cancel downvote");
      setUpvoteButton("Upvote");
      updateVote(-2);
      patchVotes(review_id, -2).catch(() => {
        setUserVote(userVote);
        setVoteErr(true);
        setDownvoteButton("Downvote");
        setUpvoteButton("Cancel upvote");
      });
    }
  };

  return (
    <>
      <p>
        <b>Votes:</b> {votes + userVote}
      </p>
      <button onClick={Increment}>{upvoteButton}</button>
      <button onClick={Decrement}>{downvoteButton}</button>
      {voteErr && (
        <p id="error-text">We didn't register that, please try again</p>
      )}
    </>
  );
};
