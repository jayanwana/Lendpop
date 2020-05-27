import axios from './axios.setup';

class LendPopApi {
  register(data) {
    return axios.post("/register", data)
  }

  verification(data) {
    return axios.post("/email", data)
  }
}

export default new LendPopApi();
