import axios from "axios";

const source = axios.CancelToken.source()

const pay = axios.create({
  baseURL: "https://api.paystack.co/",
  headers: {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.SECURITY_KEY}`
 }
});

class Paystack {
  banks() {
    return pay.get('/bank', { cancelToken: source.token })
  }

  cancel() {
    return source
  }
}

export default new Paystack();
