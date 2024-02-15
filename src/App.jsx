import Cards from "./assets/components/Cards.jsx";

import "./App.scss";

function App() {
  return (
    <>
      <div className="Title_Div">
        <img
          className="Logo"
          src="/Logo_Hand_Esports_Black.png"
          alt=""
          width="100"
          height="100"
        />

        <h1 className="mainTitre">Roues des challenges</h1>
        <img
          className="Logo"
          src="/Logo_Hand_Esports_Black.png"
          alt=""
          width="100"
          height="100"
        />
      </div>
      <Cards />
      <span>#HandEsport</span>
    </>
  );
}

export default App;
