import axios from "axios";

export const source = axios.CancelToken.source

export default axios.create({
  baseURL: "https://api.instakash.co",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic YWRtaW46YWRtaW4="
   }
});
