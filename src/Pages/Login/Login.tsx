import { Link } from "react-router";
import "./login.css";
import LoginForm from "../../components/form/LoginForm";
import RegisterForm from "../../components/form/RegisterForm";

function Login() {
  return (
    <div className="login-page">
      <LoginForm />
      <Link to="/">
        <button className="go-button">Acceuil</button>
      </Link>
      <RegisterForm />
    </div>
  );
}

export default Login;
