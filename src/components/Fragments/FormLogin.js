import { useNavigate } from "react-router-dom";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    // console.log(event.target.password.value);
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log("anda klik login");
    // window.location.href = "/products";
    navigate("/products");
  };

  const navigate = useNavigate();

  return (
    <>
      <form onSubmit={handleLogin}>
        <InputForm
          title="Email"
          name="email"
          placeholder="insert email.."
          type="email"
        ></InputForm>
        <InputForm
          title="Password"
          name="password"
          placeholder="insert password.."
          type="password"
        ></InputForm>
        <Button type="submit" variant="bg-blue-600 w-full">
          Submit
        </Button>
      </form>
    </>
  );
};
export default FormLogin;
