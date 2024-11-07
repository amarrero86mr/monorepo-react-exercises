export const ElementsContainer = (props: {
    history: Array<number>;
  }) => {
    return (
      <>
        {props.history.map((item) => {
          return (
          (item==0? null : <div 
          className="m-3"
          key={item}>
          <p>{item}</p>
          </div>)
        )
        })}
      </>
    )
};