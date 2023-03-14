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
