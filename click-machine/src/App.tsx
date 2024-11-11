import { useState } from "react";
import "./App.css";
import { ElementsContainer } from "./Component/element-constainer";

function App() {
  const [historyElement, setHistory] = useState<Array<number>>([0])
  
  

  return (
    <>
      <section>
        <h1 className="text-center text-3xl">click machine</h1>

        <div className="flex justify-center m-5">
          <button
            className="w-20 h-8 border-2 border-emerald-700 font-medium"
            onClick={() => {
              
              let newElement = historyElement[0] + 1;
              setHistory([newElement, ...historyElement])
              console.log(historyElement)
            }}
          >Click me!</button>
        </div>
      </section>
      <div className="flex">
        {/* <p>{historyElement}</p> */}
        <ElementsContainer history={historyElement}></ElementsContainer>
      </div>
    </>
  );
}

export default App;
