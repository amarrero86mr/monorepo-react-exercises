import { TCandidates } from "../App";

export const Candidates = (promps: {datos: TCandidates, fnaddNewVote: (key: string) => void }) => {

    return(
        <>
        <div className="flex justify-center gap-4">
            {Object.entries(promps.datos).map ( ([key, value]) =>{
                return(
                <div 
                key={key}
                className="text-center border-2 border-stone-300  w-32 p-1.5 rounded-lg hover:bg-stone-300 cursor-pointer active:bg-stone-400"
                onClick={() => {
                    promps.fnaddNewVote(key)
                }}
                >
                    <h3>{key}</h3>
                    <p>{value}</p>
                </div>
            )
        })}
        </div>
    </>
    )
}