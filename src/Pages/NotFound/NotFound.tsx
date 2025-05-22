import "./NotFound.css";

function NotFound() {
  return (
    <>
     <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-message">Oups ! Cette page est introuvable.</p>
      <a href="/" className="notfound-button">Retour à l'accueil</a>
    </div>
    </>
  );
}
export default NotFound;
