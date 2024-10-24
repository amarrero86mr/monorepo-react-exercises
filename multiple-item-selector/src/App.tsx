function App() {
  const selectItem = (item: string) => console.log(item);

  return (
    <>
      <div className="text-white p-3 grid">
        <div className="w-full flex justify-center">
          <button
            className="rounded-md border border-gray-700 my-3 "
            onClick={() => selectItem("JavaScript")}
          >
            JS
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="rounded-md border border-gray-700 my-3 "
            onClick={() => selectItem("TypeScript")}
          >
            TS
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="rounded-md border border-gray-700 my-3 "
            onClick={() => selectItem("CSS")}
          >
            CSS
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
