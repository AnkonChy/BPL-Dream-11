import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";

const Players = ({ handleChoosePlayer }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 pb-36 mb-36">
      {players.map((player) => (
        <Player
          key={players.playerId}
          player={player}
          handleChoosePlayer={handleChoosePlayer}
        ></Player>
      ))}
    </div>
  );
};

export default Players;
