import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-z0qy.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((response) => {
    return response.data.review;
  });
};

export const getComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

<<<<<<< HEAD
export const postComment = (review_id, newComment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
=======
export const patchVotes = (review_id, number) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: `${number}` })
    .then((response) => {
      return response.data.review.votes;
>>>>>>> fadf4f9174a4bee9a9bf53fc122fd3f4df00f05b
    });
};
