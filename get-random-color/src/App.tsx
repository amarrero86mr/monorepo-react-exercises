import "./App.css";

function App() {
  const mostrarNumeroRandom = () => console.log("numero random desde react!");
  return (
    <>
      <h1 className="fondo-verde">get random color</h1>
      <button onClick={mostrarNumeroRandom}>click me!</button>
    </>
  );
}

export default App;
