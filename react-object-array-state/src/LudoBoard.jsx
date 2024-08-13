import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  let [arr, setArr] = useState(["no moves"]);

  let blueClicked = () => {
    // moves.blue += 1; // when we update any object key value so ussase jo ibject address hai js main change nhi hota.
    console.log(`Moves :${moves.blue}`);

    setMoves({ ...moves, blue: moves.blue + 1 });
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });

    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
    console.log(arr);
  };

  let yellowClicked = () => {
    // moves.yellow += 1; // when we update any object key value so ussase jo ibject address hai js main change nhi hota.
    console.log(`Moves :${moves.yellow}`);

    // setMoves({...moves, yellow:moves.yellow+1});
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    });
  };

  // Same clicked function of red and green

  return (
    <div>
      <p>Game Begins!</p>
      <div className="board">
        <p>ARR ={arr}</p>
        <p>Blue Moves = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={blueClicked}>
          +1
        </button>
        <p>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ backgroundColor: "yellow", color: "black" }}
          onClick={yellowClicked}
        >
          +1
        </button>
        <p>Green Moves = {moves.green}</p>
        <button style={{ backgroundColor: "green" }}>+1</button>
        <p>Red Moves = {moves.red}</p>
        <button style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}
