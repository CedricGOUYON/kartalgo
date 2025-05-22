import { useState } from "react";
import { useNavigate } from "react-router";

function RegisterForm() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const navigate = useNavigate();

  const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid = username.trim() !== "" && isValidEmail(email) && email === confirmEmail && password.length > 0 && password === confirmPassword;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/game");
    } else {
      alert("Hey champion, assure-toi que tout est bien rempli !");
    }
  };

  return (
    <div className="form-container register-form">
      <h2>🚗 Inscription</h2>
      <form onSubmit={handleSubmit}>
        <label>Nom d'utilisateur</label>
        <input type="text" placeholder="Choisis ton pilote" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} required />

        <label>Email</label>
        <input type="email" placeholder="ex: peach@castle.com" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} required />

        <label>Confirmer l'email</label>
        <input type="email" placeholder="Répète ton email" value={confirmEmail} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmEmail(e.target.value)} required />

        <label>Mot de passe</label>
        <input type="password" placeholder="Crée un mot de passe" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} required />

        <label>Confirmer le mot de passe</label>
        <input type="password" placeholder="Répète le mot de passe" value={confirmPassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)} required />

        <button type="submit" disabled={!isFormValid} className={`btn ${!isFormValid ? "disabled" : ""}`}>
          Rejoins la course !
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
