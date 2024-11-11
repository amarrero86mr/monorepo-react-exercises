import { useState } from "react";
import "./App.css";
import { TCandidates } from "./utils/candidates.type";


function App() {

  const candidates: TCandidates = {
    'batman': 0,
    'superman':0
  }

  const [ voteBatman, setVoteBatman ] = useState(0)
  const [ voteSuperman, setVoteSuperman ] = useState(0)

  return (
    <>
      <h1 className="text-center text-3xl">bipartisan vote</h1>
      <div className="buttonsVote">
        <button
        className="btnBat"
        onClick={() => {
          candidates.batman = voteBatman + 1;
          setVoteBatman(candidates.batman)
        }}
        
        >Batman</button>
        <button
        className="btnSup"
        onClick={() => {
          candidates.superman = voteSuperman + 1;
          setVoteSuperman(candidates.superman)
        }}
        >Superman</button>
      </div>

      <div className="result">
        <h3
        className="resultBat"
        >Batman = {voteBatman}</h3>
        <h3
        className="resultSup"
        >Superman = {voteSuperman}</h3>
      </div>
    </>
  );
}

export default App;
