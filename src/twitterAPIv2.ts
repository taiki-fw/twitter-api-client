import axios from "axios";
import config from "../setting/env";
import { SearchParames } from "./types/v2";

const twitter = axios.create({
  baseURL: "https://api.twitter.com/2/tweets",
  headers: {
    Authorization: `Bearer ${config.BEARER_TOKEN}`,
  },
});

export const searchTweets = async (params: SearchParames) => {
  try {
    const request = await twitter.get("/search/recent", {
      params: params,
    });
    return request.data;
  } catch (e) {
    console.error(e.response.data?.detail);
  }
};
