import { TColor } from "../../schema/color.type";
import { HistoryItem } from "./history-item";

export const HistoryContainer = (props: {
  history: Array<TColor>;
  fnHandleSetColor: (c: string) => void;
}) => {
  return (
    <>
      {props.history.map((item) => (
        <HistoryItem
          key={item.id}
          color={item.rgb}
          handleSetColor={() => {
            props.fnHandleSetColor(item.rgb);
          }}
        ></HistoryItem>
      ))}
    </>
  );
};
