import { useState } from "react";
import Rows from "./components/Rows";
import Keyboard from "./components/Keyboard";
function App() {
  const [rows, setRows] = useState([...Array(6)]);
  return (
    <>
      <header>
        <h1>Wordle</h1>
      </header>
      <main>
        <Rows rows={rows} />
        <Keyboard />
      </main>
    </>
  );
}

export default App;
