import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <>
      <InputForm
        title="Username"
        name="username"
        placeholder="insert name.."
        type="text"
      ></InputForm>
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
      <InputForm
        title="Confirm Password"
        name="confirm_password"
        placeholder="insert Confirm password.."
        type="password"
      ></InputForm>
      <Button type="submit" variant="bg-blue-600 mt-2 w-full">
        Register
      </Button>
    </>
  );
};
export default FormLogin;
