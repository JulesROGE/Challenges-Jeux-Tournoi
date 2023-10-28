// Autor: Jules ROGÉ
import UserCard from "./components/UserCard";
import  Timeline  from "./components/Timeline";
import UserCardTest from "./components/UserCardTest";
import Roue from "./components/Roue";

import "./App.sass";

function App() {
  return (
    <div className="App" id="IDP1">
      <h1 className="titre">Cards</h1>

      <UserCard />

      {/* <h1 className="titre">Old Cards</h1> */}

      {/* <UserCardOld /> */}

      {/* <h1 className="titre">Test Cards</h1> */}

      {/* <UserCardTest /> */}

      <h1 className="titre">Timeline</h1>
      
      <Timeline />

      <h1 className="titre">Roue</h1>

      <Roue />

    </div>
  );
}

export default App;
