import { TCandidates } from "../App";

export const Candidates = (promps: {datos: TCandidates, fnaddNewVote: (key: string) => void }) => {

    return(
        <>
            {Object.entries(promps.datos).map ( ([key, value]) =>{
                return(
                <div key={key}
                className="candidato"
                onClick={() => {
                    promps.fnaddNewVote(key)
                }}
                >
                    <h3>{key}</h3>
                    <p>{value}</p>
                </div>
            )
        })}
    </>
    )
}