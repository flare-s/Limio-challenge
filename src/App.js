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

  useEffect(() => {
    const handleKeyUp = ({ key }) => {
      const lowerKey = key.toLowerCase();
      let isLetter = lowerKey.match(/[a-z]/gi);
      if (isLetter) {
        if (guess.length < 5) {
          console.log(lowerKey, guess);
          setGuess((prevGuess) => prevGuess + lowerKey);
        }
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [guess]);

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
