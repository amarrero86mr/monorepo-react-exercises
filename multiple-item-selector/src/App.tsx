import { ContainerItemSelector } from "./components/multiple-item-selector/container-item-selector/container-item-selector";

function App() {
  const tech_list = [
    { label: "JS", msg: "JavaScript" },
    { label: "TS", msg: "TypeScript" },
    { label: "CSS", msg: "CSS" },
  ];

  const drink_list = [
    { label: "Coca", msg: "CocaCola" },
    { label: "Sprite", msg: "Sprite" },
    { label: "Manaos", msg: "Vamos Manaos!" },
  ];

  return (
    <>
      <h1>Selecciona una tecnología</h1>
      <div id="tech-item-selector-container" className=" text-white p-3 grid">
        {<ContainerItemSelector list={tech_list}></ContainerItemSelector>}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, illum
        quos libero a dignissimos similique tempora ab maxime perspiciatis
        veritatis laborum ipsam dolorum beatae minima aliquid quaerat temporibus
        molestias necessitatibus.
      </p>

      <h1 className="mt-5">Selecciona una bebida</h1>
      <div id="drinks-item-selector-container" className=" text-white p-3 grid">
        {<ContainerItemSelector list={drink_list}></ContainerItemSelector>}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, illum
        quos libero a dignissimos similique tempora ab maxime perspiciatis
        veritatis laborum ipsam dolorum beatae minima aliquid quaerat temporibus
        molestias necessitatibus.
      </p>
    </>
  );
}

export default App;
