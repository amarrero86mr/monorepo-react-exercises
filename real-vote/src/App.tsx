import { useState } from "react";
import "./App.css";
import { Candidates } from "./components/candidates";

export type TCandidates = {
  [key: string] : number
}

function App() {
  const [ padronElect, setPadronElect ] = useState<TCandidates>({})
  const [ newCandidate, setNewCandidate ] = useState('')
  

  const addNewCandidate = () => {
    if (newCandidate !== '') {
      const newCandiBajo = newCandidate.toLowerCase();
      setPadronElect( data => ({
        ...data, [newCandiBajo]: (data[newCandiBajo] || 0) + 1
      }));
      setNewCandidate('')
    }
  }

  const addNewVote = (key: string) => {
    setPadronElect( data => ({
      ...data, [key]: data[key] +1
    }));
  };

  return (
    <>
      <h1 
        className="text-center text-3xl m-6 hover:text-red-900 transition-all duration-300 ease-in-out"
      >real vote</h1>
      <div className="nuevoCandidate text-center">
        <input type="text" 
        className=" text-2xl border-2 border-yellow-400 rounded-xl p-1.5 m-2" 
        placeholder="agrege nuevo candidate"
        value={newCandidate}
        onChange={(e) => setNewCandidate(e.target.value) }
        />

        <button type="submit"
        className="text-2xl bg-stone-300 border-2 p-1.5 rounded-full active:bg-stone-400"
        onClick={addNewCandidate}
        
        >nuevo candidate</button>

      </div>

      <Candidates
        datos={padronElect}
        fnaddNewVote={addNewVote}
      ></Candidates>
    </>
  );
}

export default App;
