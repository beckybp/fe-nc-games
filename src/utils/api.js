import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-z0qy.onrender.com/api",
});

export const getReviews = (category, sort_by, order) => {
  let path = "/reviews";
  return gamesApi
    .get(path, {
      params: {
        category: category,
        sort_by,
        order,
      },
    })
    .then((response) => {
      return response.data.reviews;
    });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then((response) => {
    return response.data.categories;
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

export const patchVotes = (review_id, number) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: `${number}` })
    .then((response) => {
      return response.data.review.votes;
    });
};

export const postComment = (review_id, newComment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then((response) => {
      return response.data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
};
