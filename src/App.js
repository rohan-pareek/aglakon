import { useState } from "react";
import AddPlayers from "./components/AddPlayers";
import PickPlayer from "./components/PickPlayer";
import Players from "./components/Players";

import './style.css';

function App() {

  const [activePlayers, setActivePlayers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  let time = 70;

  const updatePlayers = (players) => {
    const allPlayers = players.split('\n') || [];

    setActivePlayers(allPlayers.filter(player => (player !== null && player !== '')));
  }

  const pickPlayer = () => {
    if (time > 0) {
      time--;
      const random = Math.floor(Math.random() * activePlayers.length);
      setActiveIndex(random);
      setTimeout(pickPlayer, 50);
    }
  }

  return (
    <section className="app">
      <PickPlayer pickPlayer={pickPlayer} />
      <main>
        <Players players={activePlayers} activeIndex={activeIndex} />
        <AddPlayers updatePlayers={updatePlayers} />
      </main>
    </section>
  );
}

export default App;
