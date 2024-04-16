import axios from "axios"; // Axios is used for direct communication with back-end

class API {
  // Creating class "API"
  async getProdData() {
    const res = await axios.get("http://localhost:5000/api/products"); // Getting product data from link generated in back-end by server
    return res;
  }

  async postUserData(obj) {
    // "obj" parameter receives the object which contains the user information
    const res = await axios
      .post("http://localhost:5000/api/users", obj) // Sending user information object to "/api/users"
      .then(() => alert("User signed in successfully!")) // If successful, alert is being displayed to the user that data has been sent
      .catch((err) => alert(`Couldn't sign in: ${err.message}`)); // If not successful, warning is displayed to the user and reason for the error from "err.message"
    return res;
  }

  async getUserData() {
    const res = await axios.get("http://localhost:5000/api/users"); // Getting user data from link generated in back-end by server
    return res;
  }
}

export default API; // Exporting API class
