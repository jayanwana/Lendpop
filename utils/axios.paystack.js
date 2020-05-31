import axios from "axios";


const pay = axios.create({
  baseURL: "https://api.paystack.co/",
  headers: {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.SECURITY_KEY}`
 }
});

class Paystack {
  banks() {
    return pay.get('/bank')
  }
}

export default new Paystack();
