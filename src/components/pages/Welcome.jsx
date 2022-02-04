import BG from "../../img/fundoWelcome.png";
import Logo from "../../img/NuKenzieWhite.png";
import "./WelcomeStyle.css";

function Welcome({ setPage }) {
  return (
    <main className="mainWelcome">
      <div className="divContainer">
        <div className="divText">
          <img src={Logo} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={() => setPage("List")}>Iniciar</button>
        </div>

        <div className="divBg">
          <img src={BG} alt="" />
        </div>
      </div>
    </main>
  );
}

export default Welcome;
