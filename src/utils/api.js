import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://games-z0qy.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};
