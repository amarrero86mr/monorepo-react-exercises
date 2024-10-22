import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="bg-green-500">random number</button>
    </>
  );
}

export default App;
