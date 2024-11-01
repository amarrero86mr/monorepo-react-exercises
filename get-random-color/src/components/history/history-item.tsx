export const HistoryItem = (props: {
  color: string;
  handleSetColor: () => void;
}) => {
  return (
    <>
      <div
        style={{ backgroundColor: props.color }}
        onClick={() =>
        { 
          props.handleSetColor() 
          console.log(
            "se setea el color este como nuevo color del 'click-me!'",
            "se vuelve a añadir este color al historial"
          )}
        }
      >
        {props.color}
      </div>
    </>
  );
};
