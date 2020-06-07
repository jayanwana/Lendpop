import axios from './axios.setup';

class LendPopApi {
  login(data) {
    return axios.post("/login", data)
  }

  register(data) {
    return axios.post("/register", data)
  }

  verification(data) {
    return axios.post("/email", data)
  }

  password(data) {
    return axios.post("/password", data)
  }
}

export default new LendPopApi();
