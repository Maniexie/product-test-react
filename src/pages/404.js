import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1>404</h1>
      <p>Sorry , halaman tidak ditemukan </p>
      <p> {error.statusText || error.message} </p>
    </div>
  );
};

export default ErrorPage;
