import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl">greetings bot</h1>

      <div className="flex justify-center m-10">
          {/* Implementacion de Boton Click me!  */}
        <button 
        className="bg-teal-500 w-20 h-8 border-2 text-blue-950 border-teal-900 font-medium"
        // Uso de onClick para escuchar el evento click
        onClick={()=>{
          // Uso de Console.log() para imprimir el mensaje: Hola!
          console.log("Hola!")
          }}
        >Click me!</button>
      </div>
    </>
  );
}

export default App;
