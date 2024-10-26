import { useState } from "react";
import "./App.css";

function App() {
  // const estadoDinero = useState(100);

  // const dinero = estadoDinero[0];
  // const modificarDinero = estadoDinero[1];

  const [dinero, setDinero] = useState(0);

  console.log("el total al renderizar es: " + dinero);
  return (
    <>
      <h1>get random color</h1>
      <p>{dinero} usd</p>
      <button
        onClick={() => {
          console.log("se envían 10 usd!");
          setDinero(dinero - 10);
          console.log("el total actual es: " + dinero);
        }}
      >
        Enviar 10 usd
      </button>
    </>
  );
}

export default App;
