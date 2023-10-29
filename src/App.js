// Autor: Jules ROGÉ
import Roue from "./components/Roue";
import ActionAreaCard from "./components/Cards";

import "./App.sass";

function App() {
  return (
    <div className="App" id="IDP1">
      <h1 className="titre">Roux</h1>

      <Roue />

      <h1 className="titre">Cards</h1>

      <ActionAreaCard />
    </div>
  );
}

export default App;
