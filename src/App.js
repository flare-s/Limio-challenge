import { useState } from "react";
import Rows from "./components/Rows/Rows";
import Keyboard from "./components/Keyboard/Keyboard";
function App() {
  const [rows, setRows] = useState([...Array(6)]);
  return (
    <>
      <header>
        <h1>Wordle</h1>
      </header>
      <main>
        <div className="container">
          <Rows rows={rows} />
          <Keyboard />
        </div>
      </main>
    </>
  );
}

export default App;
