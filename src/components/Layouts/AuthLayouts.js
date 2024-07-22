import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl  font-bold mb-2 text-blue-600 ">{title}</h1>
        <div className="space py-4">
          {children}
          <Navigation type={type} />
        </div>
      </div>
    </div>
  );
};

const Navigation = (props) => {
  const { type } = props;
  if (type === "login") {
    return (
      <p className="">
        Tidak ada akun ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else if (type === "register") {
    return (
      <p className="">
        Sudah ada akun ?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
