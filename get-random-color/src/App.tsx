import { useState } from "react";
import "./App.css";
import { getRandomColorRgb } from "./utils/get-random-color.util";

function App() {
  const [color, setColor] = useState("");

  const [history, setHistory] = useState<Array<string>>([]);

  return (
    <>
      <section style={{ backgroundColor: color }} className="click-me">
        <h1
          onClick={() => {
            const new_color = getRandomColorRgb();
            setColor(new_color);
            setHistory([...history, new_color]);
          }}
        >
          Click me!
        </h1>

        {history.map((c) => (
          <div
            key={c}
            style={{ backgroundColor: c }}
            onClick={() =>
              console.log(
                "se setea el color este como nuevo color del 'click-me!'",
                "se vuelve a añadir este color al historial"
              )
            }
          >
            {c}
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
