import axios from "axios";

const source = axios.CancelToken.source

const pay = axios.create({
  baseURL: "https://api.paystack.co/",
  headers: {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.SECURITY_KEY}`
 }
});

class Paystack {
  constructor() {
    this.source = source;
  }

  banks(token) {
    return pay.get('/bank', token)
  }

}

export default new Paystack();
