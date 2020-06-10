import axios, { source } from './axios.setup';

class LendPopApi {
  login(data) {
    return axios.post("/login", data)
  }

  register(data) {
    return axios.post("/register", data)
  }

  otpGeneration(data) {
    return axios.post('/generate/otp', data)
  }

  verification(data) {
    return axios.post("/validate/otp", data)
  }

  password(data) {
    return axios.post("/password", data)
  }

  history(data) {
    return axios.post('/history', data, { cancelToken: source.token })
  }

  kycUpdate(data) {
    return axios.post('/kyc/update', data)
  }

  loanApplication(data) {
    return axios.post('/apply', data)
  }

  docUpload(data) {
    const options = {  headers: {
        "Content-type": "multipart/form-data",
      }}
    return axios.post('/upload/documents?=', data, options)
  }

  cancel() {
    return source
  }

}

export default new LendPopApi();
