import React from "react";

function LoginForm() {
  return (
    <div className="form-container login-form">
      <h2>🏁 Connexion</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="ex: mario@kart.com" />

        <label>Mot de passe</label>
        <input type="password" placeholder="••••••••" />

        <button type="submit">Let's-a go!</button>
      </form>
    </div>
  );
}

export default LoginForm;
