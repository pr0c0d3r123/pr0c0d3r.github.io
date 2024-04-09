import axios from "axios"; // Axios is used for direct communication with back-end

class API {
  // Creating class "API"
  async getProdData() {
    const res = await axios.get("http://localhost:5000/api/products"); // Getting data from link generated in back-end by server
    return res;
  }

  // TODO Use this function in data validation

  async #getUserData() {
    const res = await axios.get("http://localhost:5000/api/users");
    return res;
  }

  // TODO post user data from signup page to users database
  async postUserData() {}
}

export default API; // Exporting API class

// TODO MAKE DATA VALIDATION (PASSWORD HASHING, CHECKING IF EMAIL AND PASSWORD HASH MATCHES)
