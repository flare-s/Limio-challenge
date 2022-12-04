import { useState, useEffect } from "react";
import Rows from "./components/Rows/Rows";
import Keyboard from "./components/Keyboard/Keyboard";
import { words } from "./data";

function App() {
  const [rows, setRows] = useState([...Array(6)]);
  const [turn, setTurn] = useState(0);
  const [solution, setSolution] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  const [guess, setGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const formatGuess = () => {
    let solutionArray = [...solution];
    let formattedGuess = [...guess].map((l) => {
      return { key: l, color: "grey" };
    });

    // find any green letters
    formattedGuess.forEach((l, i) => {
      if (solution[i] === l.key) {
        formattedGuess[i].color = "green";
        solutionArray[i] = null;
      }
    });

    // find any yellow letters
    formattedGuess.forEach((l, i) => {
      if (solutionArray.includes(l.key) && l.color !== "green") {
        formattedGuess[i].color = "yellow";
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formattedGuess;
  };

  useEffect(() => {
    const handleKeyUp = ({ key }) => {
      const lowerKey = key.toLowerCase();
      let isLetter = lowerKey.match(/[a-z]/gi);
      if (!gameOver) {
        if (isLetter && lowerKey.length === 1) {
          if (guess.length < 5) {
            console.log(lowerKey, guess);
            setGuess((prevGuess) => prevGuess + lowerKey);
          }
        }

        if (lowerKey === "backspace") {
          setGuess((prev) => prev.slice(0, -1));
          return;
        }

        if (lowerKey === "enter") {
          // Exceeded the amount guessing times
          if (turn > 5) {
            return;
          }

          if (guess.length < 5) {
            // The guess must be a 5 letters word
            return;
          }

          if (guess.length === 5) {
            console.log(rows);
            let newGuess = formatGuess();
            console.log(newGuess);
            setRows((prevRows) => {
              let copyOfRows = [...prevRows];
              copyOfRows[turn] = newGuess;
              console.log(copyOfRows);
              return copyOfRows;
            });
            setGuess("");
            setTurn((prevTurn) => prevTurn + 1);
            if (guess === solution) {
              setGameOver(true);
            }
          }
        }
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [guess, turn]);

  return (
    <>
      <header>
        <h1>Wordle</h1>
      </header>
      <main>
        <div className="container">
          <Rows rows={rows} guess={guess} turn={turn} />
          <Keyboard />
        </div>
      </main>
    </>
  );
}

export default App;
