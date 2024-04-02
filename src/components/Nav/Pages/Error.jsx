import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 Not Found!</h1>
      <Link to="/">Go To Home Page</Link>
    </div>
  );
};

export default Error;
