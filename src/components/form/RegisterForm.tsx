function RegisterForm() {
  return (
    <div className="form-container register-form">
      <h2>🚗 Inscription</h2>
      <form>
        <label>Nom d'utilisateur</label>
        <input type="text" placeholder="Choisis ton pilote" />

        <label>Email</label>
        <input type="email" placeholder="ex: peach@castle.com" />

        <label>Confirmer l'email</label>
        <input type="email" placeholder="Répète ton email" />

        <label>Mot de passe</label>
        <input type="password" placeholder="Crée un mot de passe" />

        <label>Confirmer le mot de passe</label>
        <input type="password" placeholder="Répète le mot de passe" />

        <button type="submit">Rejoins la course!</button>
      </form>
    </div>
  );
}

export default RegisterForm;
