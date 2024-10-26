import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let[arr,setArr]=useState(["no moves"]);

  function blueIncCount() {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
  }
  function yellowIncCount() {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  }
  function greenIncCount() {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    });
  }
  function redIncCount() {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    });
  }

  return (
    <div>
      <p>Game begins</p>
      <p>{arr}</p>
      <div>
        <p>Blue Moves={moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={blueIncCount}>
          +1
        </button>
      </div>
      <div>
        <p>Yellow Moves={moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={yellowIncCount}
        >
          +1
        </button>
      </div>
      <div>
        <p>Green Moves={moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={greenIncCount}>
          +1
        </button>
      </div>
      <div>
        <p>Red Moves={moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={redIncCount}>
          +1
        </button>
      </div>
    </div>
  );
}
