import "./login.css";
import LoginForm from "../../components/form/LoginForm";
import RegisterForm from "../../components/form/RegisterForm";

function Login() {
  return (
    <div className="login-page">
      <LoginForm />
      <RegisterForm />
    </div>
  );
}

export default Login;
