import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";

function LoginPage() {
  return (
    <AuthLayouts title="Login" type="login">
      <p>Silahkan Login</p>
      <FormLogin>Login</FormLogin>
    </AuthLayouts>
  );
}
export default LoginPage;
