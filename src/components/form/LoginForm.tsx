import React, { useState } from "react";
import { Link } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = isValidEmail(email) && password.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    if (!isFormValid) e.preventDefault();
  };

  return (
    <div className="form-container login-form">
      <h2>🏁 Connexion</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="ex: mario@kart.com" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Mot de passe</label>
        <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Link to="/game" onClick={handleClick} className={`btn ${!isFormValid ? "disabled" : ""}`} tabIndex={isFormValid ? 0 : -1}>
          <button type="button" disabled={!isFormValid}>
            Départ imminent !
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
