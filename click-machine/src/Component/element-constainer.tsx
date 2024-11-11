export const ElementsContainer = (props: {
    history: Array<number>;
  }) => {
    return (
      <>
        {props.history.map((item) => {
          return (
          (item==0? null : 
          <div 
          className="m-2 w-14 h-6 border-2 border-blue-700 text-center"
          key={item}>
          <p>{item}</p>
          </div>)
        )
        })}
      </>
    )
};