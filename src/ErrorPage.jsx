import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <h1>Page Error</h1>
      <p>{err.statusText || err.message}</p>
    </>
  );
};

export default ErrorPage;
