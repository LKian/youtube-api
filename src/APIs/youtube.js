import axios from "axios";

require("dotenv").config({ path: "./config.env" });

const APP_KEY = process.env.REACT_APP_API_KEY;
console.log("APP_KEY ", APP_KEY);

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: APP_KEY,
  },
});
