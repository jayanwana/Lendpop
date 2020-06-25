import axios from "axios";

export const source = axios.CancelToken.source

export default axios.create({
  baseURL: "https://api.instakash.co/api/lending",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Basic YWRtaW46YWRtaW4="
   }
});
